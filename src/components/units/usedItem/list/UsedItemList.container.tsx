import UsedItemListUI from "./UsedItemList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEMS } from "./UsedItemList.queries";
import _ from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import { IClickedItems } from "./UsedItemList.types";

const date = new Date();
const todayDate = date.toISOString().split("T")[0];

export default function UsedItemList() {
   const router = useRouter();
   const { data, fetchMore } = useQuery(FETCH_USEDITEMS);
   const [clickedItems, setClickedItems] = useState<IClickedItems[]>([]);
   const [keyword, setKeyword] = useState("");
   console.log(data);
   useEffect(() => {
      setClickedItems(JSON.parse(localStorage.getItem("clickedItems") || "[]"));
   }, []);

   const onClickToDetail = (el) => () => {
      const clickedItems = JSON.parse(
         localStorage.getItem("clickedItems") || "[]"
      );

      const temp = clickedItems.filter(
         (todayEl) => todayEl._id === el._id && todayEl.todayDate === todayDate
      );
      if (temp.length !== 1) {
         const { __typename, ...newEl } = el;

         const newObj = { ...newEl, todayDate };

         clickedItems.push(newObj);
         localStorage.setItem("clickedItems", JSON.stringify(clickedItems));
      }
      router.push(`/useditems/${el._id}`);
   };

   const onClickToWrite = () => {
      router.push(`/useditems/new`);
   };
   const getDebounce = _.debounce((keyword) => {
      refetch({ search: keyword, page: 1 });
      setKeyword(keyword);
   }, 500);

   const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
      getDebounce(e.target.value);
   };

   function loadFunc() {
      if (!data) return;

      fetchMore({
         variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
         updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult.fetchUseditems)
               return {
                  fetchUseditems: [...prev.fetchUseditems],
               };

            return {
               fetchUseditems: [
                  ...prev.fetchUseditems,
                  ...fetchMoreResult.fetchUseditems,
               ],
            };
         },
      });
   }
   return (
      <UsedItemListUI
         data={data}
         clickedItems={clickedItems}
         onClickToDetail={onClickToDetail}
         onClickToWrite={onClickToWrite}
         keyword={keyword}
         onChangeSearch={onChangeSearch}
         loadFunc={loadFunc}
      />
   );
}
