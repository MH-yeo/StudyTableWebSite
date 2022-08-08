import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import AdminLoginUI from "./AdminLogin.presenter";
import { LOGIN_USER } from "./AdminLogin.queries";

export default function AdminLogin() {
   const router = useRouter();
   const [email, setEmail] = useState("");
   const [password, setPassWrod] = useState("");
   const [, setAccessToken] = useRecoilState(accessTokenState);
   const [loginUser] = useMutation(LOGIN_USER);

   const inputRef: any = useRef();

   const onClickToHome = () => {
      router.push("/");
   };
   const onChangeEmail = (e) => {
      setEmail(e.target.value);
   };
   const onChangePassWord = (e) => {
      setPassWrod(e.target.value);
   };
   const onClickLogin = async () => {
      try {
         const result = await loginUser({
            variables: { email, password },
         });
         const accessToken = result.data.loginUser.accessToken;
         setAccessToken(accessToken);
         Modal.success({
            content: "로그인 되었습니다.",
         });
         router.push("/");
      } catch (error) {
         alert(error.message);
         setEmail("");
         setPassWrod("");
      }
   };
   const onKeyPressEnter = (e) => {
      if (e.key === "Enter") {
         onClickLogin();
      }
   };

   useEffect(() => {
      inputRef.current.focus();
   }, []);

   return (
      <AdminLoginUI
         email={email}
         password={password}
         onClickToHome={onClickToHome}
         inputRef={inputRef}
         onChangeEmail={onChangeEmail}
         onChangePassWord={onChangePassWord}
         onClickLogin={onClickLogin}
         onKeyPressEnter={onKeyPressEnter}
      />
   );
}
