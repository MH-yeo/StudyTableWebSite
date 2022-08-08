import { useState } from "react";
import Pagination01UI from "./Pagination01.presenter";

export default function Pagination01(props) {
   const [startPage, setStartPage] = useState(1);
   const [activePage, setActivePage] = useState(1);

   const lastPage = Math.ceil(props.boardCounts / 10);

   const onClickToPrevPage = () => {
      if (startPage === 1) return;
      setStartPage(startPage - 10);
      setActivePage(startPage - 10);
      props.refetch({
         page: Number(startPage - 10),
      });
   };
   const onClickToNextPage = () => {
      if (startPage + 10 > lastPage) return;
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      props.refetch({
         page: Number(startPage + 10),
      });
   };

   const onClickToPage = (e) => {
      setActivePage(e.target.id);
      props.refetch({
         page: Number(e.target.id),
      });
   };

   return (
      <Pagination01UI
         startPage={startPage}
         onClickToPage={onClickToPage}
         onClickToPrevPage={onClickToPrevPage}
         onClickToNextPage={onClickToNextPage}
         lastPage={lastPage}
      />
   );
}
