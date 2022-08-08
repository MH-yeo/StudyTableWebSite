import { Button } from "antd";
import { numberWithCommas } from "../../../../commons/utilities/numberWithCommas";
import { MyModal } from "./ItemBuying.styles";

export default function ItemBuyingModal(props) {
   const onToggleModal = () => {
      props.setIsBuyingVisible((prev: boolean) => !prev);
   };
   const onClickBuying = () => {
      props.excuteBuying();
      onToggleModal();
   };

   return (
      <>
         <MyModal
            title="포인트로 구매"
            visible={true}
            onOk={onToggleModal}
            onCancel={onToggleModal}
            footer={[
               <Button key="back" onClick={onToggleModal}>
                  취소
               </Button>,
               <Button key="submit" type="primary" onClick={onClickBuying}>
                  확인
               </Button>,
            ]}
         >
            포인트 <strong>{numberWithCommas(props.point)}</strong> 원을
            차감하여 구매하시겠습니까?
         </MyModal>
      </>
   );
}
