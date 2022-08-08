import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import { FETCH_COMMENTS } from "../../../src/components/units/board/detail/BoardDetail.queries";

export default function RoutedPage() {
   const router = useRouter();
   const { data, fetchMore } = useQuery(FETCH_COMMENTS, {
      variables: { boardId: router.query.number },
   });
   return <BoardDetail commentData={data} fetchMore={fetchMore} />;
}
