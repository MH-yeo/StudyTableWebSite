import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommenWriteUI from "./BoardComment.presenter";
import { UPDATE_COMMENT } from "./BoardComment.queries";

export default function CommenWrite(props) {
   const [password, setPassword] = useState("");
   const [comment, setComment] = useState("");
   const [updateComment] = useMutation(UPDATE_COMMENT);
   const router = useRouter();
   const myVariables = { rating: 1 };

   if (comment) myVariables.contents = comment;

   const onClickUpdateComment = async () => {
      try {
         await updateComment({
            variables: {
               password,
               boardCommentId: props.isEditId,
               updateBoardCommentInput: myVariables,
            },
         });
         alert("수정되었습니다.");
         refreshPage();
         // router.push(`/routed/${router.query.number}`);
      } catch (error: any) {
         alert(`error message: ${error.message}`);
      }
   };
   function onChangePassword(event: any) {
      setPassword(event.target.value);
   }
   function onChangeComment(event: any) {
      setComment(event.target.value);
   }
   function refreshPage() {
      window.location.reload(false);
   }
   function onClickUnfold() {
      // router.push(`/routed/${props.number}`);
   }
   return (
      <CommenWriteUI
         onChangePassword={onChangePassword}
         onChangeComment={onChangeComment}
         onClickUpdateComment={onClickUpdateComment}
         onClickUnfold={onClickUnfold}
         isEditId={props.isEditId}
         writer={props.writer}
         contents={props.contents}
      />
   );
}
