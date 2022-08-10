import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Wrapper = styled.div`
   width: 100%;
   height: 150px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #ffffff;
   box-shadow: 0 0 5px #ddd;
`;
export const TextWrapper = styled.div`
   width: 600px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 15px;
   @media ${breakPoints.mobile} {
      width: 90%;
   }
`;
export const Mydiv = styled.div`
   cursor: pointer;
   @media ${breakPoints.mobile} {
      font-size: 12px;
   }
`;
export const GraySectionLine = styled.div`
   height: 15px;
   font-style: normal;
   border: 1px solid #bbbbbb;
   margin: 0px 10px;
`;
