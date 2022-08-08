import * as S from "./QuestionList.styles";
import InfiniteScroll from "react-infinite-scroller";
import QuestionWrite from "../write/QuestionWrite.container";
import QuestionListComponent from "./QuestionList.component";

export default function QuestionListUI(props) {
   return (
      <InfiniteScroll pageStart={0} loadMore={props.loadFunc} hasMore={true}>
         <S.ReverseColumn>
            {props.commentData?.fetchUseditemQuestions.map((el) => {
               if (el._id !== props.isEditId)
                  // 기본
                  return (
                     <S.CommentEach key={el._id}>
                        <QuestionListComponent
                           el={el}
                           isEditId={props.isEditId}
                           isReplyId={props.isReplyId}
                           commentData={props.commentData}
                           onClickUnfold={props.onClickUnfold}
                           isEditAnswerId={props.isEditAnswerId}
                           onClickToReply={props.onClickToReply}
                           onClickToDelete={props.onClickToDelete}
                           onClickToDeleteAnswer={props.onClickToDeleteAnswer}
                           onClickToEdit={props.onClickToEdit}
                           onClickToEditAnswer={props.onClickToEditAnswer}
                           setIsReplyId={props.setIsReplyId}
                        />
                        {el._id === props.isReplyId && (
                           <QuestionWrite
                              isEditId={props.isEditId}
                              isReplyId={props.isReplyId}
                              setIsReplyId={props.setIsReplyId}
                           />
                        )}
                     </S.CommentEach>
                  );
               else {
                  // 수정시
                  return (
                     <S.CommentEachNoBorder key={el._id}>
                        <QuestionWrite
                           isEditId={props.isEditId}
                           isReplyId={props.isReplyId}
                           commentData={props.commentData}
                           contents={el.contents}
                           onClickUnfold={props.onClickUnfold}
                           setIsReplyId={props.setIsReplyId}
                        />
                        <QuestionListComponent
                           el={el}
                           isEditId={props.isEditId}
                           isReplyId={props.isReplyId}
                           commentData={props.commentData}
                           onClickUnfold={props.onClickUnfold}
                           isEditAnswerId={props.isEditAnswerId}
                           onClickToReply={props.onClickToReply}
                           onClickToDelete={props.onClickToDelete}
                           onClickToDeleteAnswer={props.onClickToDeleteAnswer}
                           onClickToEdit={props.onClickToEdit}
                           onClickToEditAnswer={props.onClickToEditAnswer}
                           setIsReplyId={props.setIsReplyId}
                        />
                        {el._id === props.isReplyId && (
                           <QuestionWrite
                              isEditId={props.isEditId}
                              isReplyId={props.isReplyId}
                              setIsReplyId={props.setIsReplyId}
                           />
                        )}
                     </S.CommentEachNoBorder>
                  );
               }
            })}
         </S.ReverseColumn>
      </InfiniteScroll>
   );
}
