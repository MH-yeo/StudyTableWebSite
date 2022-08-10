import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const settings = {
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
};
export const Wrapper = styled.div``;
export const BannerBackGround = styled.div`
   width: 100%;
   height: 1080px;
   background-image: url("/layout/new-coffee-shop-5.jpeg");
   background-size: cover;
`;
export const ContentsWrapper = styled.div`
   display: flex;
`;
export const TextWrapper = styled.div`
   margin-top: 10%;
   margin-left: 18%;
   background-color: #333333c0;
   padding: 10px;
   @media ${breakPoints.mobile} {
      margin-top: 30%;
      margin-left: 0;
      width: 100%;
   }
`;
export const MainP = styled.h2`
   margin: 0;
   font-size: 50px;
   line-height: 75px;
   color: #ffffff;
`;
export const SubP = styled.p`
   margin: 0;
   font-size: 17px;
   line-height: 30px;
   color: #ffffff;
`;
export const GraySectionLine = styled.div`
   height: 15px;
   font-style: normal;
   border: 1px solid #bbbbbb;
   margin: 0px 25px;
`;

export const Myimg = styled.img``;
