import styled from "@emotion/styled";
import { Button } from "antd";
import { breakPoints } from "../../../../../commons/styles/Media";

export const Section = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   padding-top: 90px;
   padding-bottom: 80px;
`;

export const MyBackGround = styled.img`
   position: absolute;
   top: 0;
   width: 100%;
   z-index: -1;
   border-top: 430px solid #ecf2f8;
`;

export const Wrapper = styled.div`
   margin-left: auto;
   margin-right: auto;
   padding-left: 4%;
   padding-right: 4%;
   max-width: 1140px;
   /* display: flex;
   flex-direction: column;
   align-items: center; */
`;
export const Header = styled.h2`
   font-size: 45px;
   font-weight: bold;
   text-align: center;
   margin-bottom: 40px;
   @media ${breakPoints.mobile} {
      font-size: 32px;
   }
`;
export const Cards = styled.div``;

export const CardElement = styled.div`
   display: flex;
   width: 700px;
   height: 195px;
   border-radius: 10px;
   border: 1px solid #d9d9d9;
   cursor: pointer;
   margin-bottom: 8px;
   transition: margin 0.2s ease, box-shadow 0.2s ease;
   :hover {
      margin-top: -5px;
      margin-bottom: 17px;
      box-shadow: 0 5px 20px rgb(41 42 43 / 10%);
   }
   @media ${breakPoints.mobile} {
      width: 100%;
      height: 150px;
   }
`;

export const CardHeader1 = styled.div`
   width: 40%;
   background-color: #00a1ff;
   border-radius: 10px 0px 0px 10px;
   padding: 16px 24px;
   @media ${breakPoints.mobile} {
      padding: 16px 0px 16px 16px;
   }
`;
export const CardHeader2 = styled.div`
   width: 40%;
   background-color: #09b8cb;
   border-radius: 10px 0px 0px 10px;
   padding: 16px 24px;
   @media ${breakPoints.mobile} {
      padding: 16px 0px 16px 16px;
   }
`;
export const CardHeader3 = styled.div`
   width: 40%;
   background-color: #18ba9a;
   border-radius: 10px 0px 0px 10px;
   padding: 16px 24px;
   @media ${breakPoints.mobile} {
      padding: 16px 0px 16px 16px;
   }
`;
export const CardBody = styled.div`
   width: 60%;
   background-color: #ffffff;
   border-radius: 0px 10px 10px 0px;
   padding: 16px 24px;
`;
export const Title = styled.div`
   font-size: 22px;
   color: #ffffff;
   @media ${breakPoints.mobile} {
      font-size: 0.85rem;
   }
`;
export const Period = styled.div`
   font-size: 22px;
   color: #ffffff;
   font-weight: bold;
`;
export const OriginalCost = styled.div`
   color: #878d91;
   font-size: 15px;
   @media ${breakPoints.mobile} {
      font-size: 10px;
   }
`;
export const DiscountedCost = styled.div`
   font-size: 22px;
   margin-bottom: 5px;
`;
export const HighLightSpan = styled.span`
   color: #00a1ff;
   @media ${breakPoints.mobile} {
      font-size: 14px;
   }
`;
export const NomalSpan = styled.span`
   color: #363a3c;
   @media ${breakPoints.mobile} {
      font-size: 14px;
   }
`;

export const Benefit = styled.div`
   color: #878d91;
   font-size: 16px;
   @media ${breakPoints.mobile} {
      font-size: 10px;
   }
`;
export const ToFormButton = styled(Button)`
   font-size: 16px;
   width: 105px;
   height: 40px;
   color: #363a3c;
   background-color: #f8fafb;
   border: 1px solid #d9d9d9;
   border-radius: 5px;
   justify-content: flex-end;
   @media ${breakPoints.mobile} {
      font-size: 10px;
      width: 75px;
      height: 28px;
      margin-top: 10px;
   }
`;

export const Footer = styled.div``;
export const List = styled.ul`
   color: #878d91;
   font-size: 15px;
   line-height: 1.7;
`;
export const TabletButton = styled.button`
   font-size: 15px;
   color: #00a1ff;
   background: none;
   border: none;
`;
export const ModalList = styled.li`
   color: #363a3c;
   font-size: 15px;
   line-height: 1.7;
`;
