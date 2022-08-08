import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
   FETCH_BOARD,
   DELETE_BOARD,
   LIKE_BOARD,
   DISLIKE_BOARD,
} from "./BoardDetail.queries";

export default function BoardDetail(props) {
   const router = useRouter();
   const [deleteBoard] = useMutation(DELETE_BOARD);
   const [like] = useMutation(LIKE_BOARD);
   const [disLike] = useMutation(DISLIKE_BOARD);

   const { data } = useQuery(FETCH_BOARD, {
      variables: { boardId: router.query.number },
   });
   const onClickDelete = async () => {
      try {
         await deleteBoard({
            variables: { boardId: router.query.number },
         });
         success("삭제되었습니다.");
         router.push(`/boards/list`);
      } catch (error: any) {
         errorModal(`${error.message}`);
      }
   };

   const onClickToList = () => {
      router.push(`/boards/list`);
   };
   const onClickEdit = () => {
      router.push(`/boards/${router.query.number}/edit`);
   };
   const onClickLike = async () => {
      try {
         await like({
            variables: { boardId: router.query.number },
            refetchQueries: [
               {
                  query: FETCH_BOARD,
                  variables: {
                     boardId: router.query.number,
                  },
               },
            ],
         });
         success("추천 되었습니다.");
      } catch (error: any) {
         errorModal(`${error.message}`);
      }
   };
   const onClickDisLike = async () => {
      try {
         await disLike({
            variables: { boardId: router.query.number },
            refetchQueries: [
               {
                  query: FETCH_BOARD,
                  variables: {
                     boardId: router.query.number,
                  },
               },
            ],
         });
         info("비추천 되었습니다.");
      } catch (error: any) {
         errorModal(`${error.message}`);
      }
   };

   const success = (text) => {
      Modal.success({
         content: text,
      });
   };
   const info = (text) => {
      Modal.info({
         title: text,
      });
   };
   const errorModal = (text) => {
      Modal.error({
         title: "에러 메세지",
         content: text,
      });
   };

   return (
      <BoardDetailUI
         data={data}
         onClickDelete={onClickDelete}
         onClickToList={onClickToList}
         onClickEdit={onClickEdit}
         onClickLike={onClickLike}
         onClickDisLike={onClickDisLike}
         commentData={props.commentData}
         fetchMore={props.fetchMore}
      />
   );
}
