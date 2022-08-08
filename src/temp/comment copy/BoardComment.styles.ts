import styled from "@emotion/styled";
import { Button } from "react-bootstrap";

export const CommentInput = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;
export const CommentInputHeader = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   padding-bottom: 10px;
   justify-content: space-between;
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
export const InputLeft = styled.div`
   width: 250px;
   display: flex;
   flex-direction: row;
`;
export const UnfoldComment = styled.img`
   width: 18px;
   height: 18px;
   cursor: pointer;
   margin-top: 10px;
`;
export const CommentTextArea = styled.textarea`
   width: 100%;
   height: 100px;
   margin-right: 20px;
   resize: none;
   padding: 10px;
   ::placeholder {˚
      font-family: "Noto Sans CJK KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #c4c4c4;
   }
`;
export const CommentButton = styled(Button)`
   width: 125px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 24px;
`;

export const CommentSeperator = styled.div`
   width: 100%;
   border-bottom: 1px solid #bdbdbd;
   margin: 10px 0px;
`;
