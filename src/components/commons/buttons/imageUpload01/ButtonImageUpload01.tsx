import { PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyUploadButton = styled.div`
   width: 100px;
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-image: url("/useditem/image-upload.png");
   background-size: cover;
   cursor: pointer;
   :hover {
      opacity: 70%;
   }
`;

const PlusIcon = styled.div`
   border-radius: 100%;
   font-size: 20px;
   line-height: 0;
   color: #c6c6c6;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export default function ButtonImageUpload01({ onClickImage }) {
   return (
      <MyUploadButton onClick={onClickImage}>
         <PlusIcon>
            <PlusOutlined />
         </PlusIcon>
      </MyUploadButton>
   );
}
