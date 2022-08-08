import { ChangeEvent, useState, useEffect, useMemo } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
   CREATE_USEDITEM,
   UPDATE_USEDITEM,
   UPLOAD_FILE,
} from "./UsedItemWrite.queries";
import { IBoardWrite, IMyvariables } from "./UsedItemWrite.types";
import BoardWriteUI from "./UsedItemWrite.presenter";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { checkFileValidation } from "../../../../commons/utilities/fileValidation";
import { useForm } from "react-hook-form";

declare const window: typeof globalThis & {
   kakao: any;
};

export default function UsedItemWrite(props: IBoardWrite) {
   const router = useRouter();
   const [postVisible, setPostVisible] = useState(false);
   const [createUseditem] = useMutation(CREATE_USEDITEM);
   const [updateUseditem] = useMutation(UPDATE_USEDITEM);
   const [uploadFile] = useMutation(UPLOAD_FILE);
   console.log("this is edit data", props.usedItemData?.fetchUseditem);
   const {
      register,
      handleSubmit,
      setValue,
      getValues,
      trigger,
      watch,
      reset,
      control,
   } = useForm({
      mode: "onChange",
   });

   useEffect(() => {
      reset(props.usedItemData?.fetchUseditem);
   }, [props.usedItemData]);

   const imageUrl = watch("images");
   const address = watch("useditemAddress.address");
   const contents = watch("contents");

   useEffect(() => {
      if (!!address === true) {
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

   const onChangeContents = (value: string) => {
      console.log("this is value", value);
      setValue("contents", value === "<p><br></p>" ? "" : value);
      trigger("contents");
   };

   const submit = async (data) => {
      console.log("this is data", data);
      try {
         const result = await createUseditem({
            variables: {
               createUseditemInput: {
                  ...data,
               },
            },
         });
         success("게시글이 등록 되었습니다.");
         router.push(`/useditems/${result.data.createUseditem._id}`);
      } catch (error: any) {
         modalError(`${error.message}`);
      }
   };

   const update = async (data) => {
      const myVariables: IMyvariables = {
         boardId: router.query.number,
         updateBoardInput: {},
      };

      try {
         await updateUseditem({
            variables: {
               updateUseditemInput: {
                  name: data.name,
                  price: data.price,
                  remarks: data.remarks,
                  contents,
                  useditemAddress: {
                     zipcode: data.useditemAddress.zipcode,
                     address: data.useditemAddress.address,
                     addressDetail: data.useditemAddress.addressDetail,
                  },
                  images: data.images,
               },
               useditemId: router.query.number,
            },
         });
         success("게시글이 수정 되었습니다.");
         router.push(`/useditems/${router.query.number}`);
      } catch (error: any) {
         modalError(`${error.message}`);
      }
   };

   const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      const isValid = checkFileValidation(file);
      if (!isValid) return;

      try {
         const result = await uploadFile({ variables: { file } });
         // console.log(result);
         const tmp = getValues("images") || [];
         setValue("images", [...tmp, result.data.uploadFile.url]);
         trigger("images");
         // console.log("this is get Values", getValues());
      } catch (error) {
         modalError("에러가 발생하였습니다.");
      }
   };

   const onChangePrice = async (e: ChangeEvent<HTMLInputElement>) => {
      setValue("price", Number(e.target.value.replaceAll(",", "")));
      trigger("price");
   };

   const onClickToPostModal = () => {
      setPostVisible((prev) => !prev);
   };
   const onClickReset = () => {
      setValue("images", []);
   };

   const handleComplete = (data) => {
      console.log(data);

      setValue("useditemAddress", {
         zipcode: data.zonecode,
         address: data.address,
      });
      trigger("useditemAddress");

      onClickToPostModal();
   };
   const success = (text) => {
      Modal.success({
         title: text,
      });
   };
   const modalError = (text) => {
      Modal.error({
         title: text,
      });
   };

   const info = (text) => {
      Modal.info({
         title: text,
      });
   };
   console.log("this is url", imageUrl);
   return (
      <>
         <BoardWriteUI
            onChangeContents={onChangeContents}
            onChangeFile={onChangeFile}
            onChangePrice={onChangePrice}
            submit={submit}
            isEdit={props.isEdit}
            usedItemData={props.usedItemData}
            update={update}
            onClickToPostModal={onClickToPostModal}
            onClickReset={onClickReset}
            imageUrl={imageUrl}
            register={register}
            handleSubmit={handleSubmit}
            control={control}
            address={address}
            contents={contents}
         />
         {postVisible && (
            <Modal
               visible={true}
               onOk={onClickToPostModal}
               onCancel={onClickToPostModal}
            >
               <DaumPostcode onComplete={handleComplete} />
            </Modal>
         )}
      </>
   );
}
