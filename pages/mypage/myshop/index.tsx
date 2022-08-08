import styled from "@emotion/styled";
import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import MyPageMyShop from "../../../src/components/units/mypage/myshop/MyPageMyShop.container";
import MyPageSidebar from "../../../src/components/units/mypage/sidebar/MyPageSidebar.container";

export const Background = styled.div`
   display: flex;
   justify-content: center;
   padding-top: 150px;
   padding-bottom: 150px;
   background-color: #f8f8f8;
`;

export default function PickedItemsPage() {
   useAuth();
   return (
      <Background>
         <MyPageSidebar />
         <MyPageMyShop />
      </Background>
   );
}
