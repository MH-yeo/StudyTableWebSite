import styled from "@emotion/styled/";
import { Button, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
   padding: 120px 0px;
   margin: auto;
   min-height: 1200px;
   min-width: 320px;
   max-width: 450px;
`;
export const Title = styled.h2`
   width: 100%;
   margin-bottom: 40px;
   line-height: 2;
`;
export const MySpan = styled.span`
   width: 100%;
   color: #878d91;
   font-weight: 300;
`;
export const MyButtonKakao = styled(Button)`
   width: 100%;
   height: 70px;
   font-size: 20px;
   background-color: #fee500;
   border-radius: 10px;
   margin-bottom: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   :hover {
      background-color: #fee500;
      color: black;
      filter: brightness(90%);
   }
`;
export const KakaoSymbol = styled.img`
   width: 40px;
`;
export const MyMailOutlined = styled(MailOutlined)`
   font-size: 20px;
   padding-bottom: 3px;
   color: #00a1ff;
`;
export const MyButtonEmailStart = styled(Button)`
   width: 100%;
   height: 70px;
   font-size: 20px;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #00a1ff;
   :hover {
      filter: brightness(90%);
   }
`;
export const Information = styled.div`
   text-align: center;
   padding-top: 15px;
   margin-bottom: 15px;
`;
export const FormWrapper = styled.div`
   font-size: 16px;
`;
export const EmailWrapper = styled.div`
   opacity: ${(props) => (props.start ? "1" : "0")};
   max-height: ${(props) => (props.start ? "700px" : "0")};
   overflow: hidden;
   transition: all 0.25s ease;
   color: #363a3c;
   font-size: 16px;
`;

export const EmailInput = styled.input`
   width: 100%;
   border: none;
   outline: none;
   border-bottom: ${(props) =>
      props.isValidEmail ? "2px solid #00a1ff" : "2px solid #363a3c"};
   font-size: 20px;
   margin-bottom: 10px;
`;
export const EmailText = styled.div`
   margin-left: 2px;
   color: ${(props) => (props.isValid ? "#00a1ff" : "#363a3c")};
`;

export const FormInputWrapper = styled.div`
   padding-top: 20px;
   opacity: ${(props) => (props.next ? "1" : "0")};
   max-height: ${(props) => (props.next ? "400px" : "0")};
   /* transition: all 0.25s ease; */
`;
export const FormInput = styled.input`
   width: 100%;
   border: none;
   outline: none;
   border-bottom: ${(props) =>
      props.isValid ? "2px solid #00a1ff" : "2px solid #363a3c"};
   font-size: 20px;
   margin-bottom: 10px;
`;
export const ErrorText = styled.div`
   margin-left: 2px;
   font-size: 15px;
   padding-bottom: 10px;
   color: tomato;
`;
