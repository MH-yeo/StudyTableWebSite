import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import UsedItemWrite from "../../../../src/components/units/usedItem/write/UsedItemWrite.container";
import { FETCH_USEDITEM } from "../../../../src/components/units/usedItem/detail/UsedItemDetail.queries";
import { useAuth } from "../../../../src/components/commons/hooks/useAuth";

export default function EditPage() {
   useAuth();

   const router = useRouter();
   const { data, loading } = useQuery(FETCH_USEDITEM, {
      variables: { useditemId: router.query.number },
   });

   return loading ? "" : <UsedItemWrite isEdit={true} usedItemData={data} />;
}
