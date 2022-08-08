import styled from "@emotion/styled";

export const Background = styled.div`
   width: 100vw;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #f8f8f8;
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
   padding: 80px 102px 80px 102px;
   margin-top: 55px;
   background-color: white;
`;
export const WrapperComment = styled.div`
   width: 975px;
   display: flex;
   flex-direction: column;
   box-shadow: 1px 2px 3px #c4c4c4;
   padding: 80px 102px 80px 102px;
   margin-bottom: 55px;
   background-color: white;
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
   flex-direction: row;
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
export const Title = styled.div`
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 28px;
`;
export const SubData = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
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
   margin: 0px 30px;
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
   padding: 12px;
`;
export const Footer = styled.div`
   width: 100%;
   height: 40px;
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
export const CommentTextArea = styled.textarea`
   width: 100%;
   height: 100px;
   margin-right: 20px;
   resize: none;
   padding: 10px;
   ::placeholder {
      font-family: "Noto Sans CJK KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #c4c4c4;
   }
`;

export const CommentBox = styled.div`
   display: flex;
   flex-direction: column;
`;
export const CommentEach = styled.div`
   display: flex;
   flex-direction: column;
   border-top: 1px solid #bdbdbd;
   margin-top: 10px;
`;
export const CommentEachNoBorder = styled.div`
   display: flex;
   flex-direction: column;
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
   margin-left: 20px;
`;
export const CommentTime = styled.div`
   font-size: 12px;
   color: #c2c2c2;
   padding-left: 5px;
`;
export const CommentBody = styled.div`
   font-size: 16px;
   word-wrap: break-word;
`;
export const Reply = styled.img`
   width: 18px;
   height: 18px;
   margin-left: 10px;
   cursor: pointer;
`;
export const ReplyNone = styled.div`
   width: 18px;
   height: 18px;
   margin-left: 10px;
`;
export const ReplyWrapper = styled.div`
   display: flex;
   background-color: #f6f6f6;
`;
export const ReplyNoCursor = styled.img`
   width: 18px;
   height: 18px;
   margin-top: 10px;
   margin-right: 10px;
`;
export const Delete = styled.img`
   width: 18px;
   height: 18px;
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

export const UnfoldComment = styled.img`
   width: 18px;
   height: 18px;
   margin-top: 10px;
   display: flex;
   justify-content: flex-end;
   cursor: pointer;
`;
export const UnfoldBox = styled.div`
   display: flex;
   justify-content: flex-end;
`;
export const ReverseColumn = styled.div`
   display: flex;
   flex-direction: column-reverse;
`;
