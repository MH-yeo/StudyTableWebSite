import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import UsedItemDetail from "../../../src/components/units/usedItem/detail/UsedItemDetail.container";
import { FETCH_QUESTIONS } from "../../../src/components/units/usedItem/list/UsedItemList.queries";

export default function RoutedPage() {
   const router = useRouter();
   const { data, fetchMore } = useQuery(FETCH_QUESTIONS, {
      variables: { useditemId: router.query.number },
   });

   return <UsedItemDetail commentData={data} fetchMore={fetchMore} />;
}
