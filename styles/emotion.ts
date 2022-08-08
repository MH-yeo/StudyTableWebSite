import styled from "@emotion/styled";

export const Background = styled.div`
   width: 100vw;
   height: 100%;
   display: flex;
   justify-content: row;
   justify-content: center;
   align-items: center;
`;

export const Wrapper = styled.div`
   width: 1200px;
   display: flex;
   flex-direction: column;
   box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
   padding: 60px 103px 100px 101px;
   margin: 55px 0px;
`;

export const Wrapper__BD = styled.div`
   width: 1200px;
   height: 1602px;
   display: flex;
   flex-direction: column;
   box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
   padding: 80px 102px 80px 102px;
   margin: 55px 0px;
`;

export const Main__title = styled.div`
   display: flex;
   justify-content: row;
   justify-content: center;
   align-items: center;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 700;
   font-size: 36px;
   line-height: 53px;
   padding-bottom: 40px;
`;

export const Header = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding-bottom: 40px;
`;

export const Header__BD = styled.div`
   display: flex;
   flex-direction: row;
   /* justify-content: space-between; */
   /* padding-bottom: 40px; */
`;

export const Header__name = styled.div`
   width: 486px;
`;

export const Mandatory = styled.div`
   display: flex;
   flex-direction: row;
`;

export const Sub__title = styled.div`
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   padding-bottom: 16px;
`;

export const Star__markup = styled.div`
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #ffd600;
   padding-left: 5px;
`;

export const Input = styled.input`
   width: 100%;
   height: 52px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
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

export const Input__zipcode = styled.input`
   width: 77px;
   height: 52px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
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

export const Textarea = styled.textarea`
   width: 100%;
   height: 480px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   padding: 14px 0px 0px 16px;
   border: 1px solid #bdbdbd;
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

export const Header__pw = styled.div`
   width: 486px;
`;

export const Account = styled.div`
   display: flex;
   flex-direction: column;
   padding-bottom: 40px;
`;

export const Contents = styled.div`
   width: 100%;
   padding-bottom: 16px;
`;
export const Address = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding-bottom: 7 px;
`;

export const Address__zipcode = styled.div`
   width: 217px;
   display: flex;
   flex-direction: row;
   padding-bottom: 16px;
`;
export const Zipcode__serach = styled.button`
   width: 124px;
   background-color: #000000;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #ffffff;
   margin-left: 16px;
   text-align: center;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   border: 1px solid #000000;
`;

export const Textbox = styled.div`
   width: 100%;
   height: 52px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   padding: 14px 16px;
   border: 1px solid #bdbdbd;
   margin-bottom: 30px;
`;

export const Youtube = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding-bottom: 40px;
`;

export const Attachment = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding-bottom: 40px;
`;

export const Attachment__layer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
`;

export const Graybox = styled.div`
   width: 78px;
   height: 78px;
   background-color: #bdbdbd;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-right: 24px;
`;

export const Cross = styled.div`
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 25px;
   line-height: 20px;
   color: #4f4f4f;
`;
export const Upload = styled.div`
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 12px;
   line-height: 18px;
   color: #4f4f4f;
`;

export const Setting = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding-bottom: 80px;
`;

export const Radio__wrapper = styled.div`
   display: flex;
   flex-direction: row;
`;

export const Radio__container = styled.div`
   display: flex;
   flex-direction: row;
   margin-right: 22px;
`;

export const Radio__button = styled.input`
   width: 20px;
   height: 20px;
   margin: 0px 10px 0px 2px;
   :checked::after {
      background-color: #ffd600;
      color: #ffd600;
   }
`;

export const Submit = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;

export const Submit__button = styled.button`
   width: 179px;
   height: 52px;
   background-color: #ffd600;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   text-align: center;
   color: #000000;
   border: 1px solid #ffd600;
   cursor: pointer;
`;

export const Error__text = styled.div`
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

export const ProfileIcon_BD = styled.div`
   width: 56px;
   height: 56px;
   border: 1px solid black;
`;

export const HeaderInfo__BD = styled.div`
   display: flex;
   flex-direction: column;
   padding-bottom: 20px;
`;

export const InfoWriter__BD = styled.div`
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 36px;
`;

export const InfoDate__BD = styled.div`
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #828282;
`;

export const GrayLine = styled.div`
   width: 100%;
   border: 1px solid #bdbdbd;
   margin-bottom: 80px;
`;

export const Body__BD = styled.div`
   width: 100%;
   /* height : 800px; */
   display: flex;
   flex-direction: column;
`;

export const BodyTitle__BD = styled.div`
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 700;
   font-size: 36px;
   line-height: 53px;
   padding-bottom: 40px;
`;

export const BodyPicture__BD = styled.div`
   width: 100%;
   height: 480px;
   border: 1px solid black;
   margin-bottom: 40px;
`;
export const Textarea__BD = styled.div`
   width: 100%;
   height: 96px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
`;
