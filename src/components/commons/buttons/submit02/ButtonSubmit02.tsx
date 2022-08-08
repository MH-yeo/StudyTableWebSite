import styled from "@emotion/styled";
import { Button } from "antd";

const MyButton = styled(Button)`
   //회원가입 next버튼
   width: 100%;
   height: 70px;
   font-size: 20px;
   border-radius: 10px;
   margin-top: 40px;
`;

export default function ButtonSubmit02({ title, type, onClick, disabled }) {
   return (
      <MyButton
         type="primary"
         htmlType={type}
         disabled={disabled}
         onClick={onClick}
      >
         {title}
      </MyButton>
   );
}
