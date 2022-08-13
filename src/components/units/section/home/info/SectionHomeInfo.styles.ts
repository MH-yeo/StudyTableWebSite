import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/Media";

export const Section = styled.section`
   height: 480px;
   display: flex;
   margin: 160px 0px;
   justify-content: center;
   @media ${breakPoints.mobile} {
      flex-direction: column;
   }
`;
export const TextWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-right: 50px;
   @media ${breakPoints.mobile} {
      margin-right: 0px;
   }
`;

export const MainP = styled.h2`
   font-size: 40px;
   line-height: 60px;
   font-weight: bold;
   margin-bottom: 50px;
   @media ${breakPoints.mobile} {
      font-size: 30px;
      line-height: 40px;
      display: flex;
      padding: 0px 20px;
   }
`;
export const SubPWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   @media ${breakPoints.mobile} {
      padding: 0px 20px;
   }
`;
export const SubP = styled.p<{ info: boolean }>`
   margin: 0;
   font-size: 24px;
   margin-right: 50px;
   color: ${(props) => (props.info ? "#878d91" : "#00a1ff")};
   cursor: pointer;
   @media ${breakPoints.mobile} {
      line-height: 26px;
      font-size: 22px;
      margin-right: 0px;
   }
`;

export const BlueUnderLine = styled.div`
   width: 15%;
   border-top: 4px solid #00a1ff;
   margin-top: 10px;
   margin-right: 50px;
   @media ${breakPoints.mobile} {
      width: 30%;
      margin-right: 0px;
   }
`;

export const Context = styled.p`
   max-width: 425px;
   line-height: 52px;
   font-size: 24px;
   color: #363a3c;
   @media ${breakPoints.mobile} {
      line-height: 2rem;
      font-size: 1.1rem;
      display: flex;
      padding: 0px 20px;
   }
`;
const fadeIn = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0;
  }
`;

export const MyImgWrapper = styled.div<{ info: boolean }>`
   width: 475px;
   display: flex;
   justify-content: center;
   align-items: center;
   animation: ${(props) => (props.info ? fadeIn : fadeOut)} 0.75s linear;
   @media ${breakPoints.mobile} {
      width: 100%;
      height: 350px;
   }
`;

export const MyImg = styled.img`
   border-radius: 15px;
   max-width: 100%;
   max-height: 100%;
`;
export const Tab = styled.div`
   display: flex;
   margin-bottom: 90px;
   @media ${breakPoints.mobile} {
      width: 100%;
      justify-content: space-between;
      margin-bottom: 30px;
   }
`;
