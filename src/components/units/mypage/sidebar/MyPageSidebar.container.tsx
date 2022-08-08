import Head from "next/head";
import { useMutation, useQuery } from "@apollo/client";
import {
   FETCH_USER_LOGGEDIN,
   FETCH_USER_LOGOUT,
   CREATE_POINT_TRANSACTION_OF_LOADING,
} from "./MyPageSidebar.queries";
import { useState } from "react";
import PointSelect from "../../../commons/modal/pointSelect/PointSelect";
import MyPageSidebarUI from "./MyPageSidebar.presenter";
import { Modal } from "antd";

declare const window: typeof globalThis & {
   IMP: any;
};

export default function MyPageSidebar() {
   const { data } = useQuery(FETCH_USER_LOGGEDIN);
   const [userLogOut] = useMutation(FETCH_USER_LOGOUT);
   const [menuState] = useState([true, false, false]);
   const [point, setPoint] = useState(1000);
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);

   const onClickToPointModal = () => {
      setIsModalVisible((prev) => !prev);
   };

   const onClickLogOut = async () => {
      try {
         await userLogOut();
         Modal.info({
            title: "로그아웃 되었습니다.",
         });
         location.replace("/");
      } catch (e: any) {
         alert(e.message);
      }
   };

   const onClickPoint = (value) => {
      const IMP = window.IMP; // 생략 가능
      IMP.init("imp49910675"); // Example: imp00000000

      IMP.request_pay(
         {
            // param
            pg: "html5_inicis",
            pay_method: "card",
            // merchant_uid: "ORD20180131-0000011",
            name: "포인트 충전",
            amount: value,
            buyer_email: data?.fetchUserLoggedIn.email,
            buyer_name: data?.fetchUserLoggedIn.name,
            buyer_tel: "010-1234-1234",
            buyer_addr: "등록주소없음",
            buyer_postcode: "null",
         },
         async (rsp: any) => {
            // callback
            if (rsp.success) {
               await createPoint({
                  variables: { impUid: rsp.imp_uid },
               });

               //   ...,
               // 결제 성공 시 로직,
               //   ...

               // 백엔드에 결제관련 데이터 넘겨주기 (=> 즉, 뮤테이션 실행하기)
               // ex, createPointTransactionOfLoading
            } else {
               //   ...,
               // 결제 실패 시 로직,
               //   ...
               setPoint(1000);
               alert("결제에 실패했습니다! 다시 시도해 주세요!");
            }
         }
      );
   };

   return (
      <div>
         <Head>
            {/* <!-- jQuery --> */}
            <script
               type="text/javascript"
               src="https://code.jquery.com/jquery-1.12.4.min.js"
            ></script>
            {/* <!-- iamport.payment.js --> */}
            <script
               type="text/javascript"
               src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
            ></script>
         </Head>
         <MyPageSidebarUI
            data={data}
            menuState={menuState}
            onClickLogOut={onClickLogOut}
            onClickToPointModal={onClickToPointModal}
         />
         {isModalVisible && (
            <PointSelect
               setIsModalVisible={setIsModalVisible}
               onClickPoint={onClickPoint}
               point={point}
               setPoint={setPoint}
            />
         )}
      </div>
   );
}
