import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";

export default function EditPage() {
   const router = useRouter();

   const { data } = useQuery(FETCH_BOARD, {
      variables: { boardId: router.query.number },
   });

   return <BoardWrite isEdit={true} boardData={data} />;
}
