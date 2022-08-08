import { Button, Input } from "antd";
import { useState } from "react";
import { MyModal } from "./YouTubeInput.styles";

export default function YouTubeInputModal(props) {
   function onToggleModal() {
      props.onClickToYouTubeModal((prev) => !prev);
   }

   function onClickUrl() {
      props.modalInputYouTube(url);
      console.log(url);
      onToggleModal();
   }
   function onChangeUrl(e) {
      setUrl(e.target.value);
   }

   const [url, setUrl] = useState();

   return (
      <>
         <MyModal
            title="YouTube 영상넣기"
            visible={true}
            onOk={onToggleModal}
            onCancel={onToggleModal}
            footer={[
               <Button key="back" onClick={onToggleModal}>
                  취소
               </Button>,
               <Button key="submit" type="primary" onClick={onClickUrl}>
                  등록
               </Button>,
               <Button
                  key="link"
                  href="https://youtube.com"
                  type="primary"
                  onClick={onToggleModal}
               >
                  YouTube 검색
               </Button>,
            ]}
         >
            <Input
               onChange={onChangeUrl}
               placeholder="Youtube Link를 넣어주세요."
            />
         </MyModal>
      </>
   );
}
