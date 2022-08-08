import { useRef, useState } from "react";
import AdminJoinUI from "./AdminJoin.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./AdminJoin.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";

const schema = yup.object({
   name: yup.string().min(2, "실명을 입력해주세요.").required(),
   phoneNum: yup
      .string()
      .min(8, "안내받을 전화번호를 입력해주세요.")
      .required(),
   password: yup
      .string()
      .min(8, "8자리 이상 13자리 이하의 비밀번호를 입력해주세요.")
      .required(),
   passwordAgain: yup
      .string()
      .min(8, "8자리 이상 13자리 이하의 비밀번호를 입력해주세요.")
      .required(),
});

export default function AdminJoin() {
   const [start, setStart] = useState(false);
   const [email, setEmail] = useState("");
   const [isValidEmail, setIsValidEmail] = useState(false);
   const [next, setNext] = useState(false);
   const emailInputRef = useRef();
   const nameInputRef = useRef();
   const [createUser] = useMutation(CREATE_USER);
   const router = useRouter();

   const { register, handleSubmit, control, formState, reset, getValues } =
      useForm({
         resolver: yupResolver(schema),
         mode: "onChange",
         defaultValues: {
            name: "",
            phoneNum: "",
            password: "",
            passwordAgain: "",
         },
      });

   const onClickStart = () => {
      setStart((prev) => !prev);
      setNext(false);
      setEmail("");
      setIsValidEmail(false);
      emailInputRef.current.focus();
   };
   const onClickNext = () => {
      setNext((prev) => !prev);
      reset();
      nameInputRef.current.focus();
   };

   const onChageEmail = (e) => {
      setEmail(e.target.value);
      const emailRegExp =
         /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      if (e.target.value.match(emailRegExp) != null) {
         setIsValidEmail(true);
      } else setIsValidEmail(false);
   };

   const onClickSubmit = async (data) => {
      const valueData = getValues();
      if (valueData.password !== valueData.passwordAgain) {
         Modal.info({
            title: "비밀번호가 일치하지 않습니다.",
         });
         return;
      }

      const { passwordAgain, phoneNum, ...rest } = data;
      console.log(rest);
      try {
         await createUser({
            variables: {
               createUserInput: { ...rest, email },
            },
         });
         Modal.success({
            title: "회원가입이 완료되었습니다.",
         });
         router.push("/admin/login");
      } catch (error: any) {
         Modal.error({
            title: error.message,
         });
      }
   };

   const onKeyPressEnter = (e) => {
      if (e.key === "Enter" && isValidEmail) {
         onClickNext();
      }
   };

   return (
      <AdminJoinUI
         start={start}
         next={next}
         email={email}
         isValidEmail={isValidEmail}
         onClickStart={onClickStart}
         onClickNext={onClickNext}
         onClickSubmit={onClickSubmit}
         onChageEmail={onChageEmail}
         emailInputRef={emailInputRef}
         nameInputRef={nameInputRef}
         onKeyPressEnter={onKeyPressEnter}
         handleSubmit={handleSubmit}
         register={register}
         control={control}
         formState={formState}
      />
   );
}
