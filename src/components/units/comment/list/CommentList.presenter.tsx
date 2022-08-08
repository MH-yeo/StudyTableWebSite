import CommenWrite from "../write/CommentWrite.container";
import { TimeRecreate } from "../../../../commons/utilities/TimeRecreate";
import * as S from "./CommentList.styles";
import { Rate } from "antd";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentListUI(props) {
   return (
      <InfiniteScroll pageStart={0} loadMore={props.loadFunc} hasMore={true}>
         <S.ReverseColumn>
            {props.commentData?.fetchBoardComments.map((el) => {
               if (el._id !== props.isEditId)
                  return (
                     <S.CommentEach key={el._id}>
                        <S.CommentHeader>
                           <S.CommentWriter>{el.writer}</S.CommentWriter>
                           <S.CommentWhen>
                              <Rate value={el.rating} disabled={true} />
                              <S.CommentDate>
                                 {TimeRecreate(el.createdAt).split("/")[0]}
                              </S.CommentDate>
                              <S.CommentTime>
                                 {TimeRecreate(el.createdAt).split("/")[1]}
                              </S.CommentTime>
                              <S.Delete
                                 id={el._id}
                                 onClick={props.onClickToDelete}
                                 src="/board/detail/delete.png"
                              ></S.Delete>
                              <S.Edit
                                 id={el._id}
                                 onClick={props.onClickToEdit}
                                 src="/board/detail/commentedit.png"
                              ></S.Edit>
                           </S.CommentWhen>
                        </S.CommentHeader>
                        <S.CommentBody>
                           <div>{el.contents}</div>
                        </S.CommentBody>
                     </S.CommentEach>
                  );
               else {
                  return (
                     <>
                        <CommenWrite
                           isEditId={props.isEditId}
                           commentData={props.commentData}
                           writer={el.writer}
                           contents={el.contents}
                           rating={el.rating}
                           onClickUnfold={props.onClickUnfold}
                        />
                     </>
                  );
               }
            })}
         </S.ReverseColumn>
      </InfiniteScroll>
   );
}
