import styled from "@emotion/styled";
import { Button, Input } from "antd";
import { breakPoints } from "../../../../../commons/styles/Media";

export const Section = styled.section`
   width: 100%;
   display: flex;
   margin-top: 160px;
   justify-content: center;
   background-color: #e9e9e9;
   padding: 80px 0px;
   @media ${breakPoints.mobile} {
      flex-direction: column;
   }
`;
export const TextWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-right: 50px;
   @media ${breakPoints.mobile} {
      width: 100%;
      padding: 0px 20px;
   }
`;

export const MainP = styled.h2`
   font-size: 40px;
   line-height: 60px;
   font-weight: bold;
   margin-bottom: 50px;
   @media ${breakPoints.mobile} {
      margin-bottom: 25px;
   }
`;

export const Context = styled.p`
   line-height: 36px;
   font-size: 24px;
   color: #363a3c;
   @media ${breakPoints.mobile} {
      font-size: 0.9rem;
      line-height: 1.5rem;
   }
`;
export const InputGroup = styled.div`
   width: 100%;
   @media ${breakPoints.mobile} {
      padding: 0px 20px;
   }
`;
export const InputWrapper = styled.div`
   width: 100%;
   position: relative;
   display: flex;
   flex-direction: column;
`;
export const InputBox = styled(Input)`
   width: 350px;
   height: 60px;
   border-radius: 5px;
   margin-bottom: 15px;
   padding: 30px 0px 10px 24px;
   @media ${breakPoints.mobile} {
      width: 100%;
   }
`;
export const Label = styled.label`
   position: absolute;
   top: -15px;
   font-size: 12px;
   left: 0;
   display: flex;
   align-items: center;
   width: 100%;
   height: 66px;
   transition: all 0.2s;
   padding: 0 24px;
   color: #666666;
   cursor: text;
   pointer-events: none;
`;
export const MySpan = styled.span`
   margin-left: 10px;
   color: #c6c6c6;
`;
export const PolicyWrapper = styled.div`
   display: flex;
   justify-content: space-between;
`;
export const PolicyLabel = styled.label`
   display: flex;
   align-items: center;
   user-select: none;
   margin-bottom: 15px;
`;
export const PolicyCheckBox = styled.input`
   appearance: none;
   background-color: #fff;
   width: 30px;
   height: 30px;
   border: 1px solid #d9d9d9;
   border-radius: 100%;
   &:checked {
      border-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: #00a1ff;
   }
`;
export const PolicySpan = styled.span`
   font-size: 14px;
   color: #666666;
   margin-left: 15px;
`;

export const SubmitButton = styled(Button)`
   width: 350px;
   height: 60px;
   border-radius: 5px;
   background-color: #00a1ff;
   @media ${breakPoints.mobile} {
      width: 350px;
   }
`;
