import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import SectionPricingCardsUI from "./SectionPricingCards.presenter";
import * as S from "./SectionPricingCards.styles";

export default function SectionPricingCards() {
   const router = useRouter();
   const [visible, setVisible] = useState(false);

   const onClickSetVisible = () => {
      setVisible((prev) => !prev);
   };
   const onClickFormButton = () => {
      router.push("/#form");
   };
   return (
      <>
         <Modal
            title="스터디테이블 호환 태블릿 보기"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={700}
            footer={null}
         >
            <h4>iOS 기반</h4>
            <ul>
               <S.ModalList>
                  아이패드 2 혹은 그 이후 출시된 모든 아이패드 제품 (mini, pro
                  포함)
               </S.ModalList>
            </ul>
            <h4>Android 기반</h4>
            <ul>
               <S.ModalList>
                  갤럭시 노트 10.1 계열 기기(SHW-M480 기반의 SHW-M480, SHW-M485,
                  SHW-E230)
               </S.ModalList>
               <S.ModalList>
                  갤럭시 노트 10.1 2014 에디션 계열 기기(SM-P600)
               </S.ModalList>
               <S.ModalList>갤럭시 탭 A 7.0 2016 에디션 (SM-T280)</S.ModalList>
               <S.ModalList>갤럭시 탭 A 8.0 2019 에디션 (SM-T290)</S.ModalList>
               <S.ModalList>LG G Pad2 10.1 (LG-V940)</S.ModalList>
            </ul>
         </Modal>
         <SectionPricingCardsUI
            onClickSetVisible={onClickSetVisible}
            onClickFormButton={onClickFormButton}
         />
      </>
   );
}
