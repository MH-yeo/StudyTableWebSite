import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import _ from "lodash";
import { ChangeEvent, useState } from "react";

export default function BoardList() {
   const router = useRouter();
   const { data, refetch } = useQuery(FETCH_BOARDS);
   const { data: boardCounts, refetch: searchRefetch } =
      useQuery(FETCH_BOARDS_COUNT);
   const [keyword, setKeyword] = useState("");

   const onClickToDetail = (event: any) => {
      console.log(event.currentTarget.id);
      router.push(`/boards/${event.currentTarget.id}`);
   };

   const onClickWrite = () => {
      router.push(`/boards/new`);
   };
   const getDebounce = _.debounce((keyword) => {
      refetch({ search: keyword, page: 1 });
      setKeyword(keyword);
      searchRefetch({ search: keyword });
   }, 500);

   const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
      getDebounce(e.target.value);
   };
   return (
      <BoardListUI
         data={data}
         onClickToDetail={onClickToDetail}
         onClickWrite={onClickWrite}
         boardCounts={boardCounts?.fetchBoardsCount}
         keyword={keyword}
         refetch={refetch}
         onChangeSearch={onChangeSearch}
      />
   );
}
