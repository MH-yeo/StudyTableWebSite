import * as S from "./QuestionWrite.styles";

export default function QuestionWriteUI(props) {
   return (
      <S.CommentInput>
         <S.CommentSeperator></S.CommentSeperator>
         <S.CommentInputHeader>
            <S.UnfoldBox>
               {props.isEditId ? (
                  <>
                     <S.EditTitle>* 수정</S.EditTitle>
                     <S.UnfoldComment
                        onClick={props.onClickUnfold}
                        src="/board/detail/return.png"
                     ></S.UnfoldComment>
                  </>
               ) : (
                  ""
               )}
               {props.isEditAnswerId ? (
                  <>
                     <S.EditTitle>* 수정</S.EditTitle>
                     <S.UnfoldComment
                        onClick={props.onClickUnfold}
                        src="/board/detail/return.png"
                     ></S.UnfoldComment>
                  </>
               ) : (
                  ""
               )}
            </S.UnfoldBox>
         </S.CommentInputHeader>
         <S.CommentInputFooter>
            {props.isReplyId && (
               <S.ReplyArrow src="/useditem/curved-arrow.png" />
            )}
            <S.CommentTextArea
               onChange={props.onChangeQuestion}
               placeholder="말은 사라지지만 댓글은 남습니다."
               value={
                  props.isEditId
                     ? undefined
                     : props.isEditAnswerId
                     ? undefined
                     : props.question
               }
               defaultValue={
                  props.isEditId
                     ? props.contents
                     : props.isEditAnswerId
                     ? props.answerContents
                     : ""
               }
            ></S.CommentTextArea>
            <S.CommentButton
               type="primary"
               onClick={
                  props.isEditId
                     ? props.onClickUpdateQuestion
                     : props.isReplyId
                     ? props.onClickReply
                     : props.isEditAnswerId
                     ? props.onClickUpdateQuestionAnswer(props.el)
                     : props.onClickQuestion
               }
            >
               {props.isEditId
                  ? "수정"
                  : props.isEditAnswerId
                  ? "수정"
                  : "입력"}
            </S.CommentButton>
         </S.CommentInputFooter>
      </S.CommentInput>
   );
}
