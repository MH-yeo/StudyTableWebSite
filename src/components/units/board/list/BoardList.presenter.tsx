import Pagination01 from "../../../commons/pagination/01/Pagination01.container";
import BoardSideBar from "../sidebar/BoardSideBar";
import * as S from "./BoardList.styles";
import { IBoardListUI } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function BoardListUI(props: IBoardListUI) {
   return (
      <S.Background>
         <BoardSideBar />
         <S.Wrapper>
            <S.TableWrapper>
               <S.TableRowHead>
                  <S.TableHeadCentered>번호</S.TableHeadCentered>
                  <S.TableHeadTitle>제목</S.TableHeadTitle>
                  <S.TableHeadCentered>이름</S.TableHeadCentered>
                  <S.TableHeadCentered>추천</S.TableHeadCentered>
                  <S.TableHeadCentered>날짜</S.TableHeadCentered>
               </S.TableRowHead>
               <S.GrayLine></S.GrayLine>
               <S.TableBody>
                  {props.data?.fetchBoards.map((el: any) => (
                     <S.TableRow key={uuidv4()}>
                        <S.TableDataCentered key={uuidv4()}>
                           {parseInt(el._id.slice(-4), 16)}
                        </S.TableDataCentered>
                        <S.TableDataTitle
                           onClick={props.onClickToDetail}
                           key={uuidv4()}
                           id={el._id}
                        >
                           {el.title
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
                           {el.writer}
                        </S.TableDataCentered>
                        <S.TableDataCentered key={uuidv4()}>
                           {el.likeCount - el.dislikeCount}
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
                  boardCounts={props.boardCounts}
                  refetch={props.refetch}
               />
            </S.Pagina>
            <S.Footer>
               <S.SearchWrite>
                  <Input
                     allowClear
                     prefix={<SearchOutlined />}
                     onChange={props.onChangeSearch}
                     style={{ width: 200 }}
                     size="large"
                  />
                  <S.Write type="primary" onClick={props.onClickWrite}>
                     <img src="/board/detail/write.png"></img> 글쓰기
                  </S.Write>
               </S.SearchWrite>
            </S.Footer>
         </S.Wrapper>
      </S.Background>
   );
}
