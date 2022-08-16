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

interface IProps {
   title: string;
   type: "button" | "submit" | "reset" | undefined;
   disabled: boolean;
   onClick: () => void;
}

export default function ButtonSubmit02({
   title,
   type,
   onClick,
   disabled,
}: IProps) {
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
