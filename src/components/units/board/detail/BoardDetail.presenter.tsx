import * as S from "./BoardDetail.styles";
import { IBoardDetailUI } from "./BoardDetail.types";
import CommenWrite from "../../comment/write/CommentWrite.container";
import CommentList from "../../comment/list/CommentList.conatiner";
import { YouTubeBox } from "../write/BoardWrite.styles";
import DOMPurify from "dompurify";

export default function BoardDetailUI(props: IBoardDetailUI) {
   return (
      <S.Background>
         <S.Wrapper>
            <S.WrapperContents>
               <S.Header>
                  <S.Title>{props.data?.fetchBoard.title}</S.Title>
                  <S.SubTitle>
                     <S.SubData>
                        <div>by {props.data?.fetchBoard.writer}</div>
                        <S.GraySectionLine />
                        <div>자유게시판</div>
                        <S.GraySectionLine />
                        <div>
                           추천수 :{" "}
                           {props.data
                              ? props.data.fetchBoard.likeCount -
                                props.data.fetchBoard.dislikeCount
                              : ""}
                        </div>
                     </S.SubData>
                     <div></div>
                  </S.SubTitle>
               </S.Header>
               <S.GrayLine></S.GrayLine>
               <S.ContentsAreaWrapper>
                  {props.data?.fetchBoard.youtubeUrl && (
                     <YouTubeBox
                        url={props.data.fetchBoard.youtubeUrl}
                        width={props.data.fetchBoard.youtubeUrl ? "100%" : "0%"}
                     />
                  )}
                  {props.data?.fetchBoard.images.map((el, i) => {
                     return (
                        <S.ImageBox
                           key={i}
                           src={`https://storage.googleapis.com/${el}`}
                           onError={({ currentTarget }) => {
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src = "/useditem/image-default.png";
                           }}
                        />
                     );
                  })}
                  {typeof window !== "undefined" ? (
                     <S.Contents
                        dangerouslySetInnerHTML={{
                           __html: DOMPurify.sanitize(
                              String(props.data?.fetchBoard.contents)
                           ),
                        }}
                     ></S.Contents>
                  ) : (
                     <S.Contents></S.Contents>
                  )}
               </S.ContentsAreaWrapper>
               <S.Footer></S.Footer>
            </S.WrapperContents>
            <S.LikeButton>
               <S.ThumpsUp
                  onClick={props.onClickLike}
                  src="/board/detail/thumbsUp.png"
               ></S.ThumpsUp>
               <S.ThumpsDown
                  onClick={props.onClickDisLike}
                  src="/board/detail/thumbsDown.png"
               ></S.ThumpsDown>
            </S.LikeButton>
            <S.WrapperComment>
               <S.CommentBox>
                  <CommentList
                     commentData={props.commentData}
                     fetchMore={props.fetchMore}
                  />
                  {/* 댓글 디스플레이 컴포넌트 */}
               </S.CommentBox>
               <CommenWrite /> {/* 댓글 작성 컴포넌트 */}
               <S.Footer></S.Footer>
            </S.WrapperComment>
            <S.ButtonWrapper>
               <S.ToListButton onClick={props.onClickToList} type="primary">
                  목록보기
               </S.ToListButton>
               <S.ToListButton onClick={props.onClickEdit} type="primary">
                  수정하기
               </S.ToListButton>
               <S.ToListButton onClick={props.onClickDelete} type="primary">
                  삭제하기
               </S.ToListButton>
            </S.ButtonWrapper>
         </S.Wrapper>
      </S.Background>
   );
}
