import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import QuestionWriteUI from "./QuestionWrite.presenter";
import {
   CREATE_QUESTION,
   UPDATE_QUESTION,
   CREATE_QUESTION_ANSWER,
   FETCH_QUESTIONS,
   UPDATE_QUESTION_ANSWER,
   FETCH_QUESTION_ANSWERS,
} from "./QuestionWrite.queries";
import { Modal } from "antd";

interface IMyVariables {
   contents?: string;
}

export default function QuestionWrite(props) {
   const router = useRouter();
   const [question, setQuestion] = useState("");
   const [createQuestion] = useMutation(CREATE_QUESTION);
   const [createQuestionAnswer] = useMutation(CREATE_QUESTION_ANSWER);
   const [updateQuestion] = useMutation(UPDATE_QUESTION);
   const [updateQuestionAnswer] = useMutation(UPDATE_QUESTION_ANSWER);

   const onClickQuestion = async () => {
      try {
         await createQuestion({
            variables: {
               useditemId: router.query.number,
               createUseditemQuestionInput: { contents: question },
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
         success("댓글이 등록 되었습니다.");
         setQuestion("");
      } catch (error: any) {
         errorModal(error.message);
      }
   };
   const onClickReply = async () => {
      try {
         await createQuestionAnswer({
            variables: {
               useditemQuestionId: props.isReplyId,
               createUseditemQuestionAnswerInput: { contents: question },
            },
            refetchQueries: [
               {
                  query: FETCH_QUESTION_ANSWERS,
                  variables: {
                     useditemQuestionId: props.isReplyId,
                  },
               },
            ],
         });
         success("대댓글이 등록 되었습니다.");
         setQuestion("");
         props.setIsReplyId("");
      } catch (error: any) {
         errorModal(error.message);
      }
   };
   const onClickUpdateQuestion = async () => {
      const myVariables: IMyVariables = {};
      if (question) myVariables.contents = question;
      if (!myVariables.contents) return info("수정한 것이 없습니다.");
      try {
         if (myVariables.contents) {
            await updateQuestion({
               variables: {
                  useditemQuestionId: props.isEditId,
                  updateUseditemQuestionInput: myVariables,
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
            props.onClickUnfold("");
         }
         success("댓글이 수정 되었습니다.");
      } catch (error: any) {
         errorModal(error.message);
      }
   };
   const onClickUpdateQuestionAnswer = (el) => async () => {
      console.log("this is test", el);
      const myVariables: IMyVariables = {};
      if (question) myVariables.contents = question;
      if (!myVariables.contents) return info("수정한 것이 없습니다.");
      try {
         if (myVariables.contents) {
            await updateQuestionAnswer({
               variables: {
                  useditemQuestionAnswerId: props.isEditAnswerId,
                  updateUseditemQuestionAnswerInput: myVariables,
               },
               refetchQueries: [
                  {
                     query: FETCH_QUESTION_ANSWERS,
                     variables: {
                        useditemQuestionId: el._id,
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

   const onChangeQuestion = (event: any) => {
      setQuestion(event.target.value);
   };
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
      <QuestionWriteUI
         el={props.el}
         isEditId={props.isEditId}
         isEditAnswerId={props.isEditAnswerId}
         contents={props.contents}
         answerContents={props.answerContents}
         question={question}
         isReplyId={props.isReplyId}
         onChangeQuestion={onChangeQuestion}
         onClickQuestion={onClickQuestion}
         onClickReply={onClickReply}
         onClickUpdateQuestion={onClickUpdateQuestion}
         onClickUpdateQuestionAnswer={onClickUpdateQuestionAnswer}
         onClickUnfold={onClickUnfold}
      />
   );
}
