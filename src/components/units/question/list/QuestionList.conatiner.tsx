import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import QuestionDeleteModal from "../../../commons/modal/questionDelete/QuestionDelete";
import { FETCH_QUESTIONS } from "../write/QuestionWrite.queries";
import QuestionListUI from "./QuestionList.presenter";
import {
   DELETE_QUESTION,
   DELETE_QUESTION_ANSWER,
   FETCH_QUESTION_ANSWERS,
} from "./QuestionList.queries";

export default function QuestionList(props) {
   const [deleteQuestion] = useMutation(DELETE_QUESTION);
   const [deleteQuestionAnswer] = useMutation(DELETE_QUESTION_ANSWER);
   const [isEditId, setIsEditId] = useState("");
   const [isEditAnswerId, setIsEditAnswerId] = useState("");
   const [isReplyId, setIsReplyId] = useState("");
   const [isReply, setIsReply] = useState("");
   const [isDeleteId, setIsDeleteId] = useState("");
   const [isModalVisible, setIsModalVisible] = useState(false);
   const router = useRouter();

   const onClickDeleteQuestion = async () => {
      try {
         await deleteQuestion({
            variables: {
               useditemQuestionId: isDeleteId,
            },
            refetchQueries: [
               {
                  query: FETCH_QUESTIONS,
                  variables: {
                     useditemId: router.query.number,
                  },
               },
            ],
         });
         success("삭제되었습니다.");
      } catch (error: any) {
         modalError(`${error.message}`);
      }
   };
   const onClickDeleteQuestionAnswer = async () => {
      try {
         await deleteQuestionAnswer({
            variables: {
               useditemQuestionAnswerId: isDeleteId,
            },
            refetchQueries: [
               {
                  query: FETCH_QUESTION_ANSWERS,
                  variables: {
                     useditemQuestionId: isReply,
                  },
               },
            ],
         });
         success("삭제되었습니다.");
      } catch (error: any) {
         modalError(`${error.message}`);
      }
   };
   const onClickToReply = (e) => {
      setIsEditId("");
      setIsEditAnswerId("");
      if (isReplyId) setIsReplyId("");
      else setIsReplyId(e.target.id);
   };
   const onClickToEdit = (e) => {
      setIsEditAnswerId("");
      setIsEditId(e.target.id);
      setIsReplyId("");
   };
   const onClickToEditAnswer = (e) => {
      setIsEditId("");
      setIsEditAnswerId(e.target.id);
      setIsReplyId("");
   };
   const onClickToDelete = (e) => {
      setIsDeleteId(e.target.id);
      setIsModalVisible((prev) => !prev);
   };
   const onClickToDeleteAnswer = (_id) => (e) => {
      setIsDeleteId(e.target.id);
      setIsReply(_id);
      setIsModalVisible((prev) => !prev);
   };
   const onClickUnfold = () => {
      setIsEditId("");
      setIsEditAnswerId("");
   };

   const loadFunc = () => {
      if (!props.commentData) return;
      props.fetchMore({
         variables: {
            page:
               Math.ceil(props.commentData.fetchUseditemQuestions.length / 10) +
               1,
         },
         updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult.fetchUseditemQuestions)
               return {
                  fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
               };

            return {
               fetchUseditemQuestions: [
                  ...prev.fetchUseditemQuestions,
                  ...fetchMoreResult.fetchUseditemQuestions,
               ],
            };
         },
      });
   };
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
         <QuestionListUI
            onClickToReply={onClickToReply}
            onClickToEdit={onClickToEdit}
            onClickToEditAnswer={onClickToEditAnswer}
            onClickToDelete={onClickToDelete}
            onClickToDeleteAnswer={onClickToDeleteAnswer}
            onClickUnfold={onClickUnfold}
            isEditId={isEditId}
            isEditAnswerId={isEditAnswerId}
            isReplyId={isReplyId}
            setIsReplyId={setIsReplyId}
            commentData={props.commentData}
            loadFunc={loadFunc}
         />
         {isModalVisible && (
            <QuestionDeleteModal
               isReply={isReply}
               setIsModalVisible={setIsModalVisible}
               onClickDeleteQuestion={onClickDeleteQuestion}
               onClickDeleteQuestionAnswer={onClickDeleteQuestionAnswer}
            />
         )}
      </>
   );
}
