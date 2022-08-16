import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

interface IProps {
   navColor: boolean;
}

export default function LayoutNavigation(props: IProps) {
   const menuRef = useRef<HTMLDivElement>(null);
   const iconRef = useRef<HTMLDivElement>(null);
   const router = useRouter();
   const [isMobile, setIsMobile] = useState(false);
   const [isClickMenu, setIsClickMenu] = useState(false);
   const [accessToken] = useRecoilState(accessTokenState);
   const myStateRef = useRef(isClickMenu);

   const handleResize = () => {
      if (window.innerWidth <= 767) {
         setIsMobile(true);
      } else {
         setIsMobile(false);
      }
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
      window.addEventListener("click", (e) => {
         handleCloseSideBarMenu(e);
      });
      return () => {
         window.removeEventListener("click", (e) => {
            handleCloseSideBarMenu(e);
         });
      };
   }, []);

   const handleCloseSideBarMenu = ({ target }: MouseEvent) => {
      if (
         myStateRef.current &&
         !menuRef.current?.contains(target as Node) &&
         !iconRef.current?.contains(target as Node)
      )
         setIsClickMenu(false);
   };

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
   const onClickOpenSideMenu = () => {
      myStateRef.current = true;
      setIsClickMenu(true);
   };

   return (
      <LayoutNavigationUI
         onClickToHome={onClickToHome}
         onClickToPricing={onClickToPricing}
         onClickToAdminLogin={onClickToAdminLogin}
         onClickFormButton={onClickFormButton}
         onClickToCommunity={onClickToCommunity}
         onClickToMyPage={onClickToMyPage}
         setIsClickMenu={setIsClickMenu}
         onClickOpenSideMenu={onClickOpenSideMenu}
         navColor={props.navColor}
         accessToken={accessToken}
         isMobile={isMobile}
         isClickMenu={isClickMenu}
         menuRef={menuRef}
         iconRef={iconRef}
      />
   );
}
