import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ItemBuyingModal from "../../../commons/modal/itemBuying/ItemBuying";
import ItemDeleteModal from "../../../commons/modal/itemDelete/ItemDelete";
import UsedItemDetailUI from "./UsedItemDetail.presenter";
import {
   FETCH_USEDITEM,
   FETCH_USEDITEM_IPICKED,
   DELETE_USEDITEM,
   PICK_USEDITEM,
   POINT_BUYING,
} from "./UsedItemDetail.queries";
import { IPickedItems } from "./UsedItemDetail.types";

declare const window: typeof globalThis & {
   kakao: any;
};

export default function UsedItemDetail(props) {
   const router = useRouter();
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [isBuyingVisible, setIsBuyingVisible] = useState(false);
   const [isPicked, setIsPicked] = useState(false);
   const [deleteUseditem] = useMutation(DELETE_USEDITEM);
   const [pickUseditem] = useMutation(PICK_USEDITEM);
   const [buyingUseitem] = useMutation(POINT_BUYING);

   // const [pickedItems, setPickedItems] = useState<IPickedItems[]>([]);
   const { data } = useQuery(FETCH_USEDITEM, {
      variables: { useditemId: router.query.number },
   });
   const { data: pickedItems, refetch } = useQuery(FETCH_USEDITEM_IPICKED, {
      variables: {
         search: "",
      },
   });

   useEffect(() => {
      if (
         pickedItems?.fetchUseditemsIPicked.filter(
            (el) => el._id === data?.fetchUseditem._id
         ).length === 1
      ) {
         setIsPicked(true);
      } else {
         setIsPicked(false);
      }
   }, [pickedItems]);

   const address = data?.fetchUseditem.useditemAddress?.address;
   const naiveAddressDetail =
      data?.fetchUseditem.useditemAddress?.addressDetail;
   const addressDetail = naiveAddressDetail ? ", " + naiveAddressDetail : "";

   useEffect(() => {
      if (address) {
         const script = document.createElement("script");
         script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?appkey=1d7e47e75dcbbbd1592cb92f927d0645&autoload=false&libraries=services";
         document.head.appendChild(script);
         script.onload = () => {
            window.kakao.maps.load(function () {
               const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
               const options = {
                  // 지도를 생성할 때 필요한 기본 옵션
                  center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                  // 지도의 중심좌표.
                  level: 3, // 지도의 레벨(확대, 축소 정도)
                  // tileAnimation: false,
               };
               const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

               const geocoder = new window.kakao.maps.services.Geocoder();
               // 주소로 좌표를 검색합니다
               geocoder.addressSearch(address, function (result, status) {
                  // 정상적으로 검색이 완료됐으면
                  if (status === window.kakao.maps.services.Status.OK) {
                     const coords = new window.kakao.maps.LatLng(
                        result[0].y,
                        result[0].x
                     );
                     const iwContent =
                        `<div style="border:none ; padding:8px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">` +
                        `<div style="display:flex; justify-content: space-between; margin-bottom: 5px;">` +
                        '<span style="font-weight: 600;">주소정보</span>' +
                        `</div>` +
                        address +
                        addressDetail +
                        `</div>`;
                     const infowindow = new window.kakao.maps.InfoWindow({
                        content: iwContent,
                     });
                     // 결과값으로 받은 위치를 마커로 표시합니다
                     const marker = new window.kakao.maps.Marker({
                        map,
                        position: coords,
                     });

                     window.kakao.maps.event.addListener(
                        marker,
                        "mouseover",
                        function () {
                           // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                           infowindow.open(map, marker);
                        }
                     );
                     // 마커에 마우스아웃 이벤트를 등록합니다
                     window.kakao.maps.event.addListener(
                        marker,
                        "mouseout",
                        function () {
                           // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                           infowindow.close();
                        }
                     );
                     // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                     map.setCenter(coords);
                  }
               });
            });
         };
      }
   }, [address]);

   const deleteItem = async () => {
      try {
         await deleteUseditem({
            variables: { useditemId: router.query.number },
         });
         success("삭제되었습니다.");
         router.push(`/useditems/list`);
      } catch (error: any) {
         errorModal(`${error.message}`);
      }
   };
   const onClickPickItem = async () => {
      setIsPicked((prev) => !prev);
      try {
         await pickUseditem({
            variables: { useditemId: router.query.number },
         });
      } catch (error: any) {
         errorModal(`${error.message}`);
      }
   };

   const onClickToList = () => {
      router.push(`/useditems/list`);
   };
   const onClickEdit = () => {
      router.push(`/useditems/${router.query.number}/edit`);
   };

   const excuteBuying = async () => {
      try {
         const result = await buyingUseitem({
            variables: {
               useritemId: router.query.number,
            },
         });
         success("상품 구매가 완료되었습니다.");
         router.push(`/useditems/list`);
      } catch (error) {
         errorModal(error.message);
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
      <>
         <UsedItemDetailUI
            data={data}
            onClickToList={onClickToList}
            onClickEdit={onClickEdit}
            setIsModalVisible={setIsModalVisible}
            setIsBuyingVisible={setIsBuyingVisible}
            onClickPickItem={onClickPickItem}
            commentData={props.commentData}
            fetchMore={props.fetchMore}
            addressDetail={addressDetail}
            isPicked={isPicked}
         />
         {isModalVisible && (
            <ItemDeleteModal
               setIsModalVisible={setIsModalVisible}
               deleteItem={deleteItem}
            />
         )}
         {isBuyingVisible && (
            <ItemBuyingModal
               setIsBuyingVisible={setIsBuyingVisible}
               excuteBuying={excuteBuying}
               point={data?.fetchUseditem.price}
            />
         )}
      </>
   );
}

// try {
//    setIsEditId(event.target.id);
//    await updateComment({
//       variables: {
//          password,
//          boardCommentId: event.target.id,
//          updateBoardCommentInput: myVariables,
//       },
//    });
//    alert("삭제되었습니다.");
//    router.push(`/routed/${router.query.number}`);
// } catch (error: any) {
//    alert(`error message: ${error.message}`);
// }
