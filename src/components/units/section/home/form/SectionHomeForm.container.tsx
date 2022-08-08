import { Modal } from "antd";
import { useRouter } from "next/router";
import SectionHomeFormUI from "./SectionHomeForm.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { collection, getFirestore, addDoc } from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../../pages/_app";
import { useForm } from "react-hook-form";

const schema = yup.object({
   storeName: yup.string().required(),
   phoneNum: yup.string().min(8).required(),
   address: yup.string().required(),
   seats: yup.string().required(),
   checkbox: yup.boolean().oneOf([true]),
});

export default function SectionHomeForm(props) {
   const router = useRouter();

   const { register, handleSubmit, control, formState, reset } = useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
      defaultValues: {
         storeName: "",
         phoneNum: "",
         address: "",
         seats: "",
         checkbox: false,
      },
   });

   const onClickSubmit = async (data) => {
      try {
         const board = collection(getFirestore(firebaseApp), "Form");
         delete data.checkbox;
         await addDoc(board, {
            ...data,
         });
         modalSuccess("상담요청이 완료되었습니다.");
         reset();
      } catch (error: any) {
         modalError(`${error.message}`);
      }
   };
   const modalSuccess = (text) => {
      Modal.success({
         title: text,
      });
   };
   const modalError = (text) => {
      Modal.error({
         title: text,
      });
   };

   const onClickToPrivacyPolicy = () => {
      router.push("/info/privacy.policy.html");
   };

   return (
      <>
         <SectionHomeFormUI
            onClickSubmit={onClickSubmit}
            onClickToPrivacyPolicy={onClickToPrivacyPolicy}
            bottomRef={props.bottomRef}
            register={register}
            handleSubmit={handleSubmit}
            control={control}
            formState={formState}
         />
      </>
   );
}
