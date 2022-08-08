import * as S from "./UsedItemList.styles";
import { IUsedItemListUI } from "./UsedItemList.types";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";

import BoardSideBar from "../../board/sidebar/BoardSideBar";
import BoardTodayItemsList from "../todayItemsList/BoardTodayItemsList";
import { HeartOutlined, PlusOutlined } from "@ant-design/icons";
import { numberWithCommas } from "../../../../commons/utilities/numberWithCommas";

const date = new Date();
const todayDate = date.toISOString().split("T")[0];

export default function UsedItemListUI(props: IUsedItemListUI) {
   const todayItemsList = props.clickedItems.filter((el) => {
      return todayDate === el.todayDate;
   });
   return (
      <S.Background>
         <S.SideWrapper isThreeItem={todayItemsList.length >= 3}>
            <BoardSideBar />
            <BoardTodayItemsList clickedItems={props.clickedItems} />
         </S.SideWrapper>
         <S.Wrapper>
            <S.ItemsWrapper>
               <InfiniteScroll
                  pageStart={0}
                  loadMore={props.loadFunc}
                  hasMore={true}
                  useWindow={false}
               >
                  {props.data?.fetchUseditems.map((el: any) => (
                     <S.Item onClick={props.onClickToDetail(el)} key={uuidv4()}>
                        <S.ItemImage
                           src={`https://storage.googleapis.com/${el.images[0]}`}
                           onError={({ currentTarget }) => {
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src = "/useditem/image-default.png";
                           }}
                        />
                        <S.ItemContents>
                           <S.ItemName>{el.name}</S.ItemName>
                           <S.ItemAddress>
                              {el.useditemAddress?.address
                                 ? el.useditemAddress?.address
                                 : "등록된 주소 없음"}
                           </S.ItemAddress>
                           <S.ItemPrice>
                              <S.ItemStatus>
                                 {el.soldAt && "거래완료"}
                              </S.ItemStatus>
                              {el.price
                                 ? numberWithCommas(el.price) + "원"
                                 : "등록된 가격없음"}
                              <S.PickedCount>
                                 <HeartOutlined />
                                 <span style={{ width: "2px" }} />
                                 {el.pickedCount}
                              </S.PickedCount>
                           </S.ItemPrice>
                        </S.ItemContents>
                     </S.Item>
                  ))}
               </InfiniteScroll>
            </S.ItemsWrapper>
            <S.WriteIcon onClick={props.onClickToWrite}>
               <PlusOutlined />
            </S.WriteIcon>
         </S.Wrapper>
      </S.Background>
   );
}
