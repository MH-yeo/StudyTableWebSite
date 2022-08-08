import styled from "@emotion/styled";
import { Button, Image } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player/youtube";

export const Background = styled.div`
   width: 100vw;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #f8f8f8;
   padding: 150px 0px;
`;
export const Wrapper = styled.div`
   width: 975px;
   display: flex;
   flex-direction: column;
   box-shadow: 1px 2px 3px #c4c4c4;
   padding: 60px 103px 100px 101px;
   border-radius: 10px;
   background-color: white;
`;
export const MainTitle = styled.div`
   display: flex;
   justify-content: row;
   justify-content: center;
   align-items: center;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 700;
   font-size: 32px;
   line-height: 53px;
   padding-top: 16px;
`;
export const Header = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding-bottom: 10px;
`;
export const HeaderName = styled.div`
   width: 200px;
   margin-right: 30px;
`;
export const HeaderContainer = styled.div`
   display: flex;
   flex-direction: row;
`;
export const Mandatory = styled.div`
   display: flex;
   flex-direction: row;
`;
export const ImageResetWrapper = styled.div`
   display: flex;
`;
export const SubTitle = styled.div`
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
`;
export const ResetButton = styled.button`
   border: none;
   margin-left: 10px;
   border-radius: 10px;
   :hover {
      background-color: #e6e6e6;
   }
`;
export const StarMarkup = styled.div`
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #ffd600;
   padding-left: 5px;
`;
export const MyInput = styled.input`
   width: 100%;
   height: 52px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   margin: 5px 0px;
   padding: 14px 16px;
   border: 1px solid #bdbdbd;
   ::placeholder {
      font-family: "Noto Sans CJK KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #c4c4c4;
   }
`;
export const TextArea = styled.textarea`
   width: 100%;
   height: 480px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   padding: 14px 16px;
   border: none;
   resize: none;
   ::placeholder {
      font-family: "Noto Sans CJK KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #c4c4c4;
   }
`;
export const TextAreaWrapper = styled.div`
   display: flex;
   flex-direction: column;
   border: 1px solid #bdbdbd;
`;

export const HeaderPw = styled.div`
   width: 200px;
`;

export const Account = styled.div`
   display: flex;
   flex-direction: column;
   padding-bottom: 40px;
`;

export const Contents = styled.div`
   width: 100%;
   height: 100%;
   padding-bottom: 0px;
`;
export const QuillBox = styled.div`
   height: 300px;
   margin-top: 5px;
   margin-bottom: 40px;
`;

export const SubmitButton = styled(Button)`
   width: 100%;
   height: 52px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 24px;
   text-align: center;
   border: none;
   border-radius: 5px;
   margin-top: 40px;
`;
export const ErrorText = styled.div`
   height: 12px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 12px;
   line-height: 12px;
   color: red;
   padding-top: 3px;
`;
export const Picture = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;
export const YouTubeBox = styled(ReactPlayer)``;
export const Zipcode = styled.img`
   margin-left: 20px;
   cursor: pointer;
`;
export const ImagePreview = styled(Image)``;
export const PreviewBox = styled.div`
   margin-right: 20px;
   height: 100%;
`;
export const FileUpload = styled(FileImageOutlined)`
   margin-left: 20px;
   font-size: 50px;
   cursor: pointer;
`;
export const MyFileInput = styled.input`
   display: none;
`;
export const NoMap = styled.img`
   width: 100%;
   height: 400px;
   object-fit: cover;
   position: absolute;
   border-radius: 10px;
`;
export const KakaoNoMap = styled.div`
   width: 100%;
   position: relative;
`;
export const MiddleWrapper = styled.div`
   display: flex;
   justify-content: space-between;
`;
export const AddressWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 40px;
`;
export const AddressInputWrapper = styled.div`
   height: 100px;
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-top: 5px;
`;
export const ImageButtonWrapper = styled.div`
   display: flex;
   width: 225px;
   height: 100px;
   margin-top: 5px;
   justify-content: space-between;
`;
export const ImageSubmitWrapper = styled.div`
   display: flex;
   flex-direction: column;
   /* justify-content: space-between; */
   height: 100px;
   margin-bottom: 40px;
`;
export const ImageWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 100%;
   margin-bottom: 40px;
`;
export const AddressContainer = styled.div`
   width: 400px;
   display: flex;
   flex-direction: column;
   padding-left: 25px;
`;
export const AddressDaumWrapper = styled.div`
   display: flex;
   flex-direction: row;
`;
export const AddressZipCode = styled.input`
   width: 100px;
   height: 30px;
   border: 1px solid #bdbdbd;
   margin-right: 15px;
   padding-left: 10px;
`;
export const Address = styled.input`
   width: 100%;
   border: 1px solid #bdbdbd;
   padding-left: 10px;
`;
export const AddressInput = styled.input`
   margin-top: 10px;
   height: 30px;
   border: 1px solid #bdbdbd;
   padding-left: 10px;
`;
export const Footer = styled.div`
   display: flex;
   justify-content: space-between;
`;
