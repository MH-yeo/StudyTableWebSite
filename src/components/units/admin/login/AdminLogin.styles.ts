import styled from "@emotion/styled";
import { Button, Input } from "antd";
import { breakPoints } from "../../../../commons/styles/Media";

export const Wrapper = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   margin: auto;
   height: 460px;
   max-width: 450px;
`;

export const Logo = styled.img`
   width: 100%;
   margin-bottom: 40px;
   cursor: pointer;
   @media ${breakPoints.mobile} {
      margin: 0px 20px;
   }
`;
export const MyInputWrapper = styled.div`
   padding: 20px 0px;
   width: 100%;
`;
export const MyInputID = styled(Input)`
   height: 54px;
   padding: 24px 24px;
   border-radius: 8px 8px 0px 0px;
   @media ${breakPoints.mobile} {
      margin: 0px 20px;
   }
`;
export const MyInputPassWord = styled(Input)`
   height: 54px;
   padding: 24px 24px;
   border-radius: 0px 0px 8px 8px;
   @media ${breakPoints.mobile} {
      margin: 0px 20px;
   }
`;

export const MyButton = styled(Button)`
   width: 100%;
   height: 70px;
   font-size: 20px;
   @media ${breakPoints.mobile} {
      margin: 0px 20px;
   }
`;

export const AuthFindWrapper = styled.div`
   width: 100%;
   color: #878d91;
   text-align: center;
   padding-top: 15px;
   @media ${breakPoints.mobile} {
      margin-left: 20px;
   }
`;

export const AuthFindID = styled.span`
   padding: 0px 10px;
   cursor: pointer;
`;

export const AuthFindPassWord = styled.span`
   padding: 0px 10px;
   cursor: pointer;
`;

export const Footer = styled.div`
   font-size: 14px;
   padding: 20px 30px;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   text-align: center;
   background-color: #f8f8f8;
`;
