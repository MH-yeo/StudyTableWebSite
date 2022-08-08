import * as S from "./UsedItemDetail.styles";
import { IUsedItemDetailUI } from "./UsedItemDetail.types";
import DOMPurify from "dompurify";
import { numberWithCommas } from "../../../../commons/utilities/numberWithCommas";
import QuestionWrite from "../../question/write/QuestionWrite.container";
import QuestionList from "../../question/list/QuestionList.conatiner";

export default function UsedItemDetailUI(props: IUsedItemDetailUI) {
   return (
      <S.Background>
         <S.Wrapper>
            <S.WrapperContents>
               <S.MySliderForCenter>
                  <S.MySliderWrapper>
                     <S.MySlider {...S.settings}>
                        {props.data?.fetchUseditem.images.length === 0 && (
                           <S.ImageBox src={`/useditem/image-default.png`} />
                        )}
                        {props.data?.fetchUseditem.images.map((el, i) => (
                           <S.ImageBox
                              key={i}
                              src={`https://storage.googleapis.com/${el}`}
                              onError={({ currentTarget }) => {
                                 currentTarget.onerror = null; // prevents looping
                                 currentTarget.src =
                                    "/useditem/image-default.png";
                              }}
                           />
                        ))}
                     </S.MySlider>
                  </S.MySliderWrapper>
                  <div
                     id="map"
                     style={{
                        width: "50%",
                        height: "100%",
                     }}
                  />
                  {!props.data?.fetchUseditem.useditemAddress?.address && (
                     <S.NoMap src="/useditem/nomap.png" />
                  )}
               </S.MySliderForCenter>
               <S.Header>
                  <S.Name>{props.data?.fetchUseditem.name} </S.Name>
                  {props.data?.fetchUseditem.remarks}
                  <S.PriceProfileWrapper>
                     <S.Price>
                        {numberWithCommas(props.data?.fetchUseditem.price) +
                           "원"}
                     </S.Price>
                  </S.PriceProfileWrapper>
                  <S.ProfileWrapper>
                     <div style={{ display: "flex" }}>
                        <S.Profile src="/profile.png" />
                        <S.NameAddress>
                           <strong>
                              {props.data?.fetchUseditem.seller.name}
                           </strong>
                           <div>
                              {props.data?.fetchUseditem.useditemAddress
                                 ?.address || "등록된 주소 없음"}
                              {props.addressDetail}
                           </div>
                        </S.NameAddress>
                     </div>
                     {!props.isPicked && (
                        <div>
                           <S.Heart
                              onClick={props.onClickPickItem}
                              src="/useditem/unheart.png"
                           />
                        </div>
                     )}
                     {props.isPicked && (
                        <div>
                           <S.Heart
                              onClick={props.onClickPickItem}
                              src="/useditem/heart.png"
                           />
                        </div>
                     )}
                  </S.ProfileWrapper>
               </S.Header>
               <S.GrayLine></S.GrayLine>
               <S.ContentsAreaWrapper>
                  {typeof window !== "undefined" ? (
                     <S.Contents
                        dangerouslySetInnerHTML={{
                           __html: DOMPurify.sanitize(
                              String(props.data?.fetchUseditem.contents)
                           ),
                        }}
                     ></S.Contents>
                  ) : (
                     <S.Contents></S.Contents>
                  )}
               </S.ContentsAreaWrapper>
               <S.Footer>
                  <S.BuyingButton
                     onClick={() => {
                        props.setIsBuyingVisible((prev) => !prev);
                     }}
                  >
                     <img
                        src="/useditem/whitecoin.png"
                        style={{ marginRight: "10px" }}
                     />
                     포인트로 구매하기
                  </S.BuyingButton>
               </S.Footer>
            </S.WrapperContents>
            <S.LikeButton></S.LikeButton>
            <S.WrapperComment>
               <S.CommentBox>
                  <QuestionList
                     commentData={props.commentData}
                     fetchMore={props.fetchMore}
                  />
                  {/* 댓글 디스플레이 컴포넌트 */}
               </S.CommentBox>
               <QuestionWrite /> {/* 댓글 작성 컴포넌트 */}
               <S.Footer></S.Footer>
            </S.WrapperComment>
            <S.ButtonWrapper>
               <S.ToListButton onClick={props.onClickToList} type="primary">
                  목록보기
               </S.ToListButton>
               <S.ToListButton onClick={props.onClickEdit} type="primary">
                  수정하기
               </S.ToListButton>
               <S.ToListButton
                  onClick={() => {
                     props.setIsModalVisible((prev) => !prev);
                  }}
                  type="primary"
               >
                  삭제하기
               </S.ToListButton>
            </S.ButtonWrapper>
         </S.Wrapper>
      </S.Background>
   );
}
