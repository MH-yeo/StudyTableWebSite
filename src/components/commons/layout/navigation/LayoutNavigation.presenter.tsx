import { SideBarMenu } from "../../sidebarmenu/SideBarMenu";
import * as S from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props) {
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
                        navColor={props.navColor}
                        onClick={() => props.setIsClickMenu((prev) => !prev)}
                     />
                  </S.MenuWrapper>
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
            {props.isClickMenu && <SideBarMenu ref={props.el} />}
         </S.BannerNav>
      </>
   );
}
