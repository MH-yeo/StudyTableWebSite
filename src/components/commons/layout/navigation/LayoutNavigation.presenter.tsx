import { Dispatch, Ref, SetStateAction } from "react";
import SideBarMenu from "../../sidebarmenu/SideBarMenu";
import * as S from "./LayoutNavigation.styles";

interface IProps {
   accessToken: string;
   navColor: boolean;
   isMobile: boolean;
   isClickMenu: boolean;
   iconRef: Ref<HTMLSpanElement>;
   menuRef: Ref<HTMLDivElement>;
   onClickToHome: () => void;
   onClickToCommunity: () => void;
   onClickOpenSideMenu: () => void;
   onClickToPricing: () => void;
   onClickToAdminLogin: () => void;
   onClickToMyPage: () => void;
   onClickFormButton: () => void;
   setIsClickMenu: Dispatch<SetStateAction<boolean>>;
}

export default function LayoutNavigationUI(props: IProps) {
   return (
      <>
         <S.BannerNav navColor={props.navColor}>
            <S.BannerLeft>
               <S.Logo
                  onClick={props.onClickToHome}
                  src={
                     props.navColor
                        ? "/layout/logo-white.png"
                        : "/layout/logo.png"
                  }
               />
               {props.accessToken && (
                  <S.CommunityWrapper navColor={props.navColor}>
                     <S.Mydiv
                        onClick={props.onClickToCommunity}
                        navColor={props.navColor}
                     >
                        커뮤니티
                     </S.Mydiv>
                  </S.CommunityWrapper>
               )}
            </S.BannerLeft>
            {props.isMobile ? (
               <>
                  <S.MenuWrapper>
                     <S.MenuIcon
                        ref={props.iconRef}
                        navColor={props.navColor}
                        onClick={props.onClickOpenSideMenu}
                     />
                  </S.MenuWrapper>
                  {props.isClickMenu && (
                     <SideBarMenu
                        menuRef={props.menuRef}
                        setIsClickMenu={props.setIsClickMenu}
                     />
                  )}
               </>
            ) : (
               <S.BannerMenu navColor={props.navColor}>
                  <S.Mydiv
                     onClick={props.onClickToPricing}
                     navColor={props.navColor}
                  >
                     이용안내
                  </S.Mydiv>
                  {!props.accessToken && (
                     <S.Mydiv
                        onClick={props.onClickToAdminLogin}
                        navColor={props.navColor}
                     >
                        점주님 로그인
                     </S.Mydiv>
                  )}
                  {props.accessToken && (
                     <S.Mydiv
                        navColor={props.navColor}
                        onClick={props.onClickToMyPage}
                     >
                        마이 페이지
                     </S.Mydiv>
                  )}
                  <S.Mydiv
                     navColor={props.navColor}
                     onClick={props.onClickFormButton}
                  >
                     상담문의
                  </S.Mydiv>
               </S.BannerMenu>
            )}
         </S.BannerNav>
      </>
   );
}
