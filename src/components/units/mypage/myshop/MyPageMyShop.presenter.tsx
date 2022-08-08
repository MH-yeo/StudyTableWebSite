import Pagination01 from "../../../commons/pagination/01/Pagination01.container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./MyPageMyShop.styles";
import { numberWithCommas } from "../../../../commons/utilities/numberWithCommas";

export default function MyPageMyShopUI(props) {
   return (
      <S.MyPage>
         <S.Wrapper>
            <S.MyShopMenu>
               <S.Picked
                  isPickedMenu={props.isPickedMenu}
                  onClick={() => {
                     props.setIsPickedMenu(true);
                  }}
               >
                  찜한목록
               </S.Picked>
               <S.SectionLine />
               <S.MyItem
                  isPickedMenu={props.isPickedMenu}
                  onClick={() => {
                     props.setIsPickedMenu(false);
                  }}
               >
                  내가올린상품
               </S.MyItem>
            </S.MyShopMenu>
            <S.TableWrapper>
               <S.TableRowHead>
                  <S.TableHeadCentered>번호</S.TableHeadCentered>
                  <S.TableHeadTitle>제품명</S.TableHeadTitle>
                  <S.TableHeadCentered>가격</S.TableHeadCentered>
                  <S.TableHeadCentered>판매자</S.TableHeadCentered>
                  <S.TableHeadCentered>날짜</S.TableHeadCentered>
               </S.TableRowHead>
               <S.GrayLine></S.GrayLine>
               <S.TableBody>
                  {props.data?.map((el: any, i: number) => (
                     <S.TableRow
                        key={uuidv4()}
                        onClick={props.onClickToDetail(el)}
                        isDelete={el.deletedAt}
                     >
                        <S.TableDataCentered key={uuidv4()}>
                           {parseInt(el._id.slice(-5), 16)}
                        </S.TableDataCentered>
                        <S.TableDataTitle key={uuidv4()} id={el._id}>
                           {el.name
                              .replaceAll(
                                 props.keyword,
                                 `#$%${props.keyword}#$%`
                              )
                              .split("#$%")
                              .map((el) => (
                                 <S.Word
                                    key={uuidv4()}
                                    isMatched={props.keyword === el}
                                 >
                                    {el}
                                 </S.Word>
                              ))}
                        </S.TableDataTitle>
                        <S.TableDataCentered key={uuidv4()}>
                           {numberWithCommas(el.price) + " p"}
                        </S.TableDataCentered>
                        <S.TableDataCentered key={uuidv4()}>
                           {el.seller.name}
                        </S.TableDataCentered>
                        <S.TableDataCentered key={uuidv4()}>
                           {el.createdAt.split("T")[0].replaceAll("-", ".")}
                        </S.TableDataCentered>
                     </S.TableRow>
                  ))}
               </S.TableBody>
            </S.TableWrapper>
            <S.Pagina>
               <Pagination01
                  boardCounts={props.counts}
                  refetch={props.refetch}
               />
            </S.Pagina>
         </S.Wrapper>
      </S.MyPage>
   );
}
