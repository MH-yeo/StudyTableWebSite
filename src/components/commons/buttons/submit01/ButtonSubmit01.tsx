import styled from "@emotion/styled";
import { Button } from "antd";

const MyButton = styled(Button)`
   //main page 등록 버튼
   width: ${(props: { width: string }) =>
      props.width ? props.width : "350px"};
   height: 60px;
   border-radius: 5px;
   background-color: #00a1ff;
`;

export default function ButtonSubmit01({ title, disabled, width }) {
   return (
      <MyButton
         htmlType="submit"
         type="primary"
         disabled={disabled}
         width={width}
      >
         {title}
      </MyButton>
   );
}
