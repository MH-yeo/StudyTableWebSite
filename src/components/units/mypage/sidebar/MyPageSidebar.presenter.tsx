import {
   DollarOutlined,
   HeartOutlined,
   LogoutOutlined,
   ShoppingCartOutlined,
   UserOutlined,
} from "@ant-design/icons";
import { numberWithCommas } from "../../../../commons/utilities/numberWithCommas";
import * as S from "./MyPageSidebar.styles";

export default function MyPageSidebarUI(props) {
   return (
      <S.SideBarWrapper>
         <S.ProfileWrapper>
            <S.Profile src="/profile.png" />
            <S.NamePointWrapper>
               <strong>
                  <span style={{ fontSize: "20px" }}>
                     {props.data?.fetchUserLoggedIn.name}
                  </span>
               </strong>
            </S.NamePointWrapper>
         </S.ProfileWrapper>
         <S.MyPoint>
            <img src="/mypage/yellowcoin.png" style={{ marginRight: "5px" }} />
            {numberWithCommas(props.data?.fetchUserLoggedIn.userPoint.amount)}
            {"  point"}
         </S.MyPoint>
         <S.ResetButton type="button" onClick={props.onClickToPointModal}>
            포인트 충전하기
         </S.ResetButton>
         <S.PickedItemMenu
            id="0"
            onClick={props.onClickMenu}
            menuState={props.menuState[0]}
         >
            <ShoppingCartOutlined />
            <S.MenuTitle>내 장터</S.MenuTitle>
         </S.PickedItemMenu>
         <S.PickedItemMenu
            id="1"
            onClick={props.onClickMenu}
            menuState={props.menuState[1]}
         >
            <DollarOutlined />
            <S.MenuTitle>포인트 내역</S.MenuTitle>
         </S.PickedItemMenu>
         <S.PickedItemMenu
            id="2"
            onClick={props.onClickMenu}
            menuState={props.menuState[2]}
         >
            <UserOutlined />
            <S.MenuTitle>프로필 설정</S.MenuTitle>
         </S.PickedItemMenu>
         <S.LogOutMenu onClick={props.onClickLogOut}>
            <LogoutOutlined />
            <S.MenuTitle>로그아웃</S.MenuTitle>
         </S.LogOutMenu>
      </S.SideBarWrapper>
   );
}
