import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation(props) {
   const el = useRef<HTMLDivElement>(null);
   const router = useRouter();
   const [isMobile, setIsMobile] = useState(false);
   const [isClickMenu, setIsClickMenu] = useState(false);
   const [accessToken] = useRecoilState(accessTokenState);

   const handleResize = () => {
      if (window.innerWidth <= 767) {
         setIsMobile(true);
      } else {
         setIsMobile(false);
      }
   };

   const handleCloseSideBarMenu = ({ target }) => {
      if (isClickMenu && !el.current?.contains(target)) setIsClickMenu(false);
      console.log("this is click event target", el.current?.contains(target));
      console.log("is open", isClickMenu);
   };

   useEffect(() => {
      if (window.innerWidth <= 767) {
         setIsMobile(true);
      }
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [isMobile]);

   useEffect(() => {
      window.addEventListener("click", handleCloseSideBarMenu);
      return () => {
         window.removeEventListener("click", handleCloseSideBarMenu);
      };
   }, []);

   const onClickToHome = () => {
      router.push("/");
   };
   const onClickToPricing = () => {
      router.push("/pricing");
   };
   const onClickToAdminLogin = () => {
      router.push("/admin/login");
   };
   const onClickFormButton = () => {
      router.push("/#form");
   };
   const onClickToCommunity = () => {
      router.push("/useditems/list");
   };
   const onClickToMyPage = () => {
      router.push("/mypage/myshop");
   };
   return (
      <>
         <LayoutNavigationUI
            onClickToHome={onClickToHome}
            onClickToPricing={onClickToPricing}
            onClickToAdminLogin={onClickToAdminLogin}
            onClickFormButton={onClickFormButton}
            onClickToCommunity={onClickToCommunity}
            onClickToMyPage={onClickToMyPage}
            setIsClickMenu={setIsClickMenu}
            navColor={props.navColor}
            accessToken={accessToken}
            isMobile={isMobile}
            isClickMenu={isClickMenu}
            el={el}
         />
      </>
   );
}
