import styled from "@emotion/styled";
import { Button } from "antd";
import Slider from "react-slick";

export const settings = {
   dots: true,
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
};
export const MySlider = styled(Slider)`
   .slick-dots {
      bottom: 20px; // play with the number of pixels to position it as you want
   }
`;
export const MySliderWrapper = styled.div`
   width: 50%;
   height: 100%;
`;
export const MySliderForCenter = styled.div`
   width: 100%;
   display: flex;
   position: relative;
   margin-bottom: 40px;
`;
export const Background = styled.div`
   display: flex;
   justify-content: center;
   padding-top: 50px;
   background-color: #f8f8f8;
   padding: 150px 0px;
`;
export const Wrapper = styled.div`
   width: 975px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const WrapperContents = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   box-shadow: 1px 2px 3px #c4c4c4;
   padding: 40px 102px 80px 102px;
   background-color: white;
   border-radius: 10px;
`;
export const KakaoMap = styled.div``;
export const NoMap = styled.img`
   width: 50%;
   height: 100%;
   object-fit: cover;
   position: absolute;
   right: 0;
   z-index: 1;
`;

export const WrapperComment = styled.div`
   width: 975px;
   display: flex;
   flex-direction: column;
   box-shadow: 1px 2px 3px #c4c4c4;
   padding: 80px 102px 80px 102px;
   margin-bottom: 55px;
   background-color: white;
   border-radius: 10px;
`;
export const CommentInput = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;
export const CommentInputHeader = styled.div`
   width: 250px;
   display: flex;
   flex-direction: row;
   padding-bottom: 10px;
`;
export const CommentInputFooter = styled.div`
   width: 100%;
   display: flex;
   padding-bottom: 10px;
`;
export const Input = styled.input`
   width: 100%;
   height: 28px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   padding: 14px 10px;
   border: 1px solid #bdbdbd;
   margin-right: 10px;
   ::placeholder {
      font-family: "Noto Sans CJK KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #c4c4c4;
      text-align: center;
   }
`;
export const Header = styled.div`
   display: flex;
   flex-direction: column;
`;
export const Name = styled.div`
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 22px;
`;

export const PriceProfileWrapper = styled.div`
   width: 100%;
   display: flex;
`;
export const Profile = styled.img`
   margin-right: 20px;
`;
export const ProfileWrapper = styled.div`
   display: flex;
   justify-content: space-between;
`;
export const NameAddress = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   color: #363a3c;
`;
export const Price = styled.div`
   width: 50%;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 700;
   font-size: 28px;
`;
export const Heart = styled.img`
   width: 40px;
   height: 40px;
   cursor: pointer;
`;
export const SubData = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   font-size: 16px;
`;
export const SubTitle = styled.div`
   font-style: normal;
   font-size: 18px;
   font-weight: 500;
   color: #bbbbbb;
`;
export const GraySectionLine = styled.div`
   height: 20px;
   font-style: normal;
   border: 1px solid #bbbbbb;
   margin: 0px 15px;
`;
export const GrayLine = styled.div`
   width: 100%;
   border: 1px solid #bdbdbd;
   margin: 12px 0px;
`;
export const Contents = styled.div`
   width: 100%;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   padding: 12px 0px;
`;
export const Footer = styled.div`
   width: 100%;
   height: 40px;
   display: flex;
   justify-content: flex-end;
   padding-top: 12px;
`;
export const BuyingButton = styled.div`
   width: 160px;
   height: 40px;
   color: white;
   font-size: 16px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-radius: 5px;
   background-color: #00a1ff;
   cursor: pointer;
   :hover {
      opacity: 0.8;
   }
   padding: 0px 5px;
`;
export const LikeButton = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 40px 400px;
`;
export const ThumpsUp = styled.img`
   cursor: pointer;
   margin-right: 20px;
`;
export const ThumpsDown = styled.img`
   cursor: pointer;
`;

export const CommentBox = styled.div`
   display: flex;
   flex-direction: column;
`;
export const CommentEach = styled.div`
   display: flex;
   flex-direction: column;
   padding-bottom: 50px;
   border-top: 1px solid #bdbdbd;
   margin-top: 10px;
   padding: 0px 5px;
`;
export const CommentSeperator = styled.div`
   width: 100%;
   border-bottom: 1px solid #bdbdbd;
   margin: 10px 0px;
`;
export const CommentHeader = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 10px 0px 20px 0px;
`;
export const CommentWriter = styled.div`
   font-size: 18px;
   font-weight: 700;
   color: #666666;
`;
export const CommentWhen = styled.div`
   display: flex;
   flex-direction: row;
`;
export const CommentDate = styled.div`
   font-size: 12px;
   color: #c2c2c2;
`;
export const CommentTime = styled.div`
   font-size: 12px;
   color: #c2c2c2;
   padding-left: 5px;
`;
export const CommentBody = styled.div`
   font-size: 16px;
`;
export const Delete = styled.img`
   width: 18px;
   height: 18px;
   margin-left: 10px;
   cursor: pointer;
`;
export const Edit = styled.img`
   width: 18px;
   height: 18px;
   cursor: pointer;
`;
export const ButtonWrapper = styled.div`
   width: 300px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 50px;
`;
export const ToListButton = styled(Button)`
   width: 90px;
   height: 40px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 24px;
   border-radius: 5px;
`;
export const UnfoldComment = styled.img`
   width: 18px;
   height: 18px;
   cursor: pointer;
   margin-top: 10px;
   display: flex;
   justify-content: flex-end;
`;
export const UnfoldBox = styled.div`
   display: flex;
   justify-content: flex-end;
`;
export const ContentsAreaWrapper = styled.div`
   display: flex;
   flex-direction: column;
   word-wrap: break-word;
`;
export const ImageBox = styled.img`
   height: 386px;
   object-fit: cover;
`;
