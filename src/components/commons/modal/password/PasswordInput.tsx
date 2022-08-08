import { Button, Input } from "antd";
import { MyModal } from "./PasswordInput.styles";

export default function PasswordInputModal(props) {
   function onToggleModal() {
      props.onClickToPasswordModal((prev) => !prev);
   }

   function onClickPassword() {
      props.modalInputPassword();
      onToggleModal();
   }
   function onChangePassword(e) {
      props.onChangeSetPassword(e.target.value);
   }

   return (
      <>
         <MyModal
            title="Password를 입력해주세요"
            visible={true}
            onOk={onToggleModal}
            onCancel={onToggleModal}
            footer={[
               <Button key="back" onClick={onToggleModal}>
                  취소
               </Button>,
               <Button key="submit" type="primary" onClick={onClickPassword}>
                  입력
               </Button>,
            ]}
         >
            <Input type="password" onChange={onChangePassword} />
         </MyModal>
      </>
   );
}
