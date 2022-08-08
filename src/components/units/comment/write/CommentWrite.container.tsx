import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommenWriteUI from "./CommentWrite.presenter";
import {
   CREATE_COMMENT,
   UPDATE_COMMENT,
   FETCH_COMMENTS,
} from "./CommentWrite.queries";
import { Modal } from "antd";

interface IMyVariables {
   writer?: string;
   password?: string;
   rating?: number;
   contents?: string;
}

export default function CommenWrite(props) {
   const router = useRouter();

   const [writer, setWriter] = useState("");
   const [password, setPassword] = useState("");
   const [comment, setComment] = useState("");
   const [rating, setRating] = useState<number>();

   const [createComment] = useMutation(CREATE_COMMENT);
   const [updateComment] = useMutation(UPDATE_COMMENT);

   const onClickComment = async () => {
      const myVariables: IMyVariables = {};
      if (writer) myVariables.writer = writer;
      if (password) myVariables.password = password;

      if (rating) myVariables.rating = rating;
      else myVariables.rating = 5;

      if (comment) myVariables.contents = comment;
      if (
         myVariables.writer &&
         myVariables.password &&
         myVariables.rating &&
         myVariables.contents
      )
         try {
            await createComment({
               variables: {
                  boardId: router.query.number,
                  createBoardCommentInput: myVariables,
               },
               refetchQueries: [
                  {
                     query: FETCH_COMMENTS,
                     variables: {
                        boardId: router.query.number,
                     },
                  },
               ],
            });
            success("댓글이 등록 되었습니다.");
            setWriter("");
            setPassword("");
            setComment("");
            setRating(5);
         } catch (error: any) {
            errorModal(error.message);
         }
   };

   const onClickUpdateComment = async () => {
      console.log(props.isEditId);
      const myVariables: IMyVariables = {};
      if (rating) myVariables.rating = rating;
      if (comment) myVariables.contents = comment;
      if (!myVariables.rating && !myVariables.contents)
         return info("수정한 것이 없습니다.");
      try {
         if (password === "") return errorModal("password를 입력해주세요");
         if (myVariables.contents || myVariables.rating) {
            await updateComment({
               variables: {
                  password,
                  boardCommentId: props.isEditId,
                  updateBoardCommentInput: myVariables,
               },
               refetchQueries: [
                  {
                     query: FETCH_COMMENTS,
                     variables: {
                        boardId: router.query.number,
                     },
                  },
               ],
            });
            props.onClickUnfold("");
         }
         success("댓글이 수정 되었습니다.");
      } catch (error: any) {
         errorModal(error.message);
      }
   };

   function onChangeWriter(event: any) {
      setWriter(event.target.value);
   }
   function onChangePassword(event: any) {
      setPassword(event.target.value);
   }
   function onChangeComment(event: any) {
      setComment(event.target.value);
   }
   const onClickUnfold = () => {
      props.onClickUnfold("");
   };
   const success = (text) => {
      Modal.success({
         content: text,
      });
   };
   const info = (text) => {
      Modal.info({
         title: text,
      });
   };
   const errorModal = (text) => {
      Modal.error({
         title: "에러 메세지",
         content: text,
      });
   };

   return (
      <CommenWriteUI
         onChangeWriter={onChangeWriter}
         onChangePassword={onChangePassword}
         onChangeComment={onChangeComment}
         onClickComment={onClickComment}
         onClickUpdateComment={onClickUpdateComment}
         onClickUnfold={onClickUnfold}
         isEditId={props.isEditId}
         writer={props.writer}
         defaultWriter={writer}
         password={password}
         contents={props.contents}
         comment={comment}
         rating={props.rating}
         defaultRating={rating}
         setRating={setRating}
      />
   );
}
