import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import PasswordInputModal from "../../../commons/modal/password/PasswordInput";
import { FETCH_COMMENTS } from "../write/CommentWrite.queries";
import CommentListUI from "./CommentList.presenter";
import { DELETE_COMMENT } from "./CommentList.queries";

export default function CommentList(props) {
   const [deleteBoardComment] = useMutation(DELETE_COMMENT);
   const [isEditId, setIsEditId] = useState("");
   const [isDeleteId, setIsDeleteId] = useState("");
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [password, setPassword] = useState();
   const router = useRouter();

   const onClickDeleteComment = async () => {
      try {
         await deleteBoardComment({
            variables: {
               password,
               boardCommentId: isDeleteId,
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
         success("삭제되었습니다.");
      } catch (error: any) {
         modalError(`${error.message}`);
      }
   };
   const onClickToEdit = async (event) => {
      setIsEditId(event.target.id);
   };
   const onClickToDelete = async (event) => {
      setIsDeleteId(event.target.id);
      onClickToPasswordModal();
   };
   function onClickUnfold() {
      setIsEditId("");
   }

   function onClickToPasswordModal() {
      setIsModalVisible((prev) => !prev);
   }
   function modalInputPassword() {
      onClickDeleteComment();
   }
   function onChangeSetPassword(para) {
      setPassword(para);
   }
   function loadFunc() {
      if (!props.commentData) return;
      props.fetchMore({
         variables: {
            page:
               Math.ceil(props.commentData.fetchBoardComments.length / 10) + 1,
         },
         updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult.fetchBoardComments)
               return {
                  fetchBoardComments: [...prev.fetchBoardComments],
               };

            return {
               fetchBoardComments: [
                  ...prev.fetchBoardComments,
                  ...fetchMoreResult.fetchBoardComments,
               ],
            };
         },
      });
   }
   const success = (text) => {
      Modal.success({
         title: text,
      });
   };
   const modalError = (text) => {
      Modal.error({
         title: text,
      });
   };

   return (
      <>
         <CommentListUI
            onClickDeleteComment={onClickDeleteComment}
            onClickToEdit={onClickToEdit}
            onClickToDelete={onClickToDelete}
            onClickUnfold={onClickUnfold}
            isEditId={isEditId}
            commentData={props.commentData}
            onClickToPasswordModal={onClickToPasswordModal}
            loadFunc={loadFunc}
         />
         {isModalVisible && (
            <PasswordInputModal
               modalInputPassword={modalInputPassword}
               onClickToPasswordModal={onClickToPasswordModal}
               onChangeSetPassword={onChangeSetPassword}
            />
         )}
      </>
   );
}
