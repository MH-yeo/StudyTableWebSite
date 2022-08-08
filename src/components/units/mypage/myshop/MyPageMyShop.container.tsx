import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MyPageMyShopUI from "./MyPageMyShop.presenter";
import {
   FETCH_USEDITEM_IPICKED,
   FETCH_USEDITEM_ISOLD,
   FETCH_COUNTS_IPICKED,
} from "./MyPageMyShop.queries";

let soldCounts = 0;

export default function MyPageMyShop() {
   const router = useRouter();
   const [serachPage, setSerachPage] = useState(1);
   const [isPickedMenu, setIsPickedMenu] = useState(true);

   const { data, refetch } = useQuery(FETCH_USEDITEM_IPICKED, {
      variables: {
         search: "",
      },
   });
   // **올린 상품 전체 갯수계산**
   const { data: soldData } = useQuery(FETCH_USEDITEM_ISOLD, {
      variables: {
         search: "",
         page: serachPage,
      },
   });

   useEffect(() => {
      // 내가올린상품 serachPage  돌려줌
      if (
         soldData?.fetchUseditemsISold.length !== 0 &&
         soldData?.fetchUseditemsISold.length !== undefined
      ) {
         setSerachPage(serachPage + 1);
      }
   });

   const { data: finalSoldData } = useQuery(FETCH_USEDITEM_ISOLD, {
      variables: {
         search: "",
         page: serachPage - 1,
      },
   });
   useEffect(() => {
      // 갯수 새줌
      const lastSoldCount = finalSoldData?.fetchUseditemsISold.length;
      soldCounts = (serachPage - 2) * 10 + lastSoldCount;
   });
   const { data: forFirstPageData, refetch: forFirstSoldRefetch } = useQuery(
      FETCH_USEDITEM_ISOLD,
      {
         variables: {
            search: "",
         },
      }
   );
   // **올린 상품 전체 갯수계산**

   const { data: pickedItemCounts } = useQuery(FETCH_COUNTS_IPICKED);

   const onClickToDetail = (el) => () => {
      if (el?.deletedAt) return 1;
      else router.push(`/useditems/${el._id}`);
   };

   return (
      <MyPageMyShopUI
         data={
            isPickedMenu
               ? data?.fetchUseditemsIPicked
               : forFirstPageData?.fetchUseditemsISold
         }
         refetch={isPickedMenu ? refetch : forFirstSoldRefetch}
         isPickedMenu={isPickedMenu}
         onClickToDetail={onClickToDetail}
         setIsPickedMenu={setIsPickedMenu}
         counts={
            isPickedMenu
               ? pickedItemCounts?.fetchUseditemsCountIPicked
               : soldCounts
         }
      />
   );
}
