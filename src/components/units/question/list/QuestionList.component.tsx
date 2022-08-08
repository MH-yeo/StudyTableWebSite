import { useQuery } from "@apollo/client";
import { TimeRecreate } from "../../../../commons/utilities/TimeRecreate";
import QuestionWrite from "../write/QuestionWrite.container";
import { FETCH_QUESTION_ANSWERS } from "./QuestionList.queries";
import * as S from "./QuestionList.styles";

export default function QuestionListComponent({
   el,
   isEditId,
   isReplyId,
   commentData,
   isEditAnswerId,
   onClickUnfold,
   onClickToReply,
   onClickToDelete,
   onClickToDeleteAnswer,
   onClickToEdit,
   onClickToEditAnswer,
   setIsReplyId,
}) {
   const { data } = useQuery(FETCH_QUESTION_ANSWERS, {
      variables: { useditemQuestionId: el._id },
   });

   return (
      <>
         {isEditId !== el._id && (
            <>
               <S.CommentHeader>
                  <S.CommentWriter>{el.user.name}</S.CommentWriter>
                  <S.CommentWhen>
                     <S.CommentDate>
                        {TimeRecreate(el.createdAt).split("/")[0]}
                     </S.CommentDate>
                     <S.CommentTime>
                        {TimeRecreate(el.createdAt).split("/")[1]}
                     </S.CommentTime>
                     <S.Reply
                        id={el._id}
                        onClick={onClickToReply}
                        src="/useditem/curved-arrow.png"
                     ></S.Reply>
                     <S.Delete
                        id={el._id}
                        onClick={onClickToDelete}
                        src="/board/detail/delete.png"
                     ></S.Delete>
                     <S.Edit
                        id={el._id}
                        onClick={onClickToEdit}
                        src="/board/detail/commentedit.png"
                     ></S.Edit>
                  </S.CommentWhen>
               </S.CommentHeader>
               <S.CommentBody>
                  <div>{el.contents}</div>
               </S.CommentBody>
            </>
         )}
         {data?.fetchUseditemQuestionAnswers.map((replyEl, i) => {
            if (replyEl._id !== isEditAnswerId) {
               // 기본
               return (
                  <S.ReplyWrapper key={i}>
                     <S.ReplyNoCursor src="/useditem/curved-arrow.png"></S.ReplyNoCursor>
                     <div style={{ width: "100%" }}>
                        <S.CommentHeader>
                           <S.CommentWriter>
                              {replyEl.user.name}
                           </S.CommentWriter>
                           <S.CommentWhen>
                              <S.CommentDate>
                                 {TimeRecreate(replyEl.createdAt).split("/")[0]}
                              </S.CommentDate>
                              <S.CommentTime>
                                 {TimeRecreate(replyEl.createdAt).split("/")[1]}
                              </S.CommentTime>
                              <S.ReplyNone />
                              <S.Delete
                                 id={replyEl._id}
                                 onClick={onClickToDeleteAnswer(el._id)}
                                 src="/board/detail/delete.png"
                              ></S.Delete>
                              <S.Edit
                                 id={replyEl._id}
                                 onClick={onClickToEditAnswer}
                                 src="/board/detail/commentedit.png"
                              ></S.Edit>
                           </S.CommentWhen>
                        </S.CommentHeader>
                        <S.CommentBody>
                           <div>{replyEl.contents}</div>
                        </S.CommentBody>
                     </div>
                  </S.ReplyWrapper>
               );
            } else {
               // 수정시
               return (
                  <QuestionWrite
                     el={el}
                     isEditId={isEditId}
                     isEditAnswerId={isEditAnswerId}
                     isReplyId={isReplyId}
                     commentData={commentData}
                     contents={el.contents}
                     answerContents={replyEl.contents}
                     onClickUnfold={onClickUnfold}
                     setIsReplyId={setIsReplyId}
                  />
               );
            }
         })}
      </>
   );
}
