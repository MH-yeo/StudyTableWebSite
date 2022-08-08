import { Button } from "antd";
import { MyModal } from "./ItemDelete.styles";

export default function ItemDeleteModal(props) {
   const onToggleModal = () => {
      props.setIsModalVisible((prev: boolean) => !prev);
   };
   const onClickDelete = () => {
      props.deleteItem();
      onToggleModal();
   };

   return (
      <>
         <MyModal
            title="삭제"
            visible={true}
            onOk={onToggleModal}
            onCancel={onToggleModal}
            footer={[
               <Button key="back" onClick={onToggleModal}>
                  취소
               </Button>,
               <Button key="submit" type="primary" onClick={onClickDelete}>
                  확인
               </Button>,
            ]}
         >
            정말 삭제하시겠습니까?
         </MyModal>
      </>
   );
}
