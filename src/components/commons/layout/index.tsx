import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

const HIDDEN_BANNERS = ["/admin/login", "/admin/join", "/pricing"];
const HIDDEN_FOOTER = ["/admin/login"];
const HIDDEN_NAVIGATION = ["/admin/login"];

export default function Layout(props) {
   const router = useRouter();
   const [navColor, setNavColor] = useState(true);

   let isHiddenBanner = HIDDEN_BANNERS.includes(router.pathname);
   if (
      router.pathname.indexOf("/boards/") >= 0 ||
      router.pathname.indexOf("/useditems/") >= 0 ||
      router.pathname.indexOf("/mypage") >= 0
   )
      isHiddenBanner = true;
   const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);
   const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.pathname);

   let yPosition = 1;
   if (router.pathname === "/") yPosition = 1030;

   const listenScrollEvent = () => {
      if (window.scrollY < yPosition) {
         return setNavColor(true);
      } else if (window.scrollY > yPosition) {
         return setNavColor(false);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => window.removeEventListener("scroll", listenScrollEvent);
   });

   return (
      <>
         {!isHiddenNavigation && <LayoutNavigation navColor={navColor} />}
         {!isHiddenBanner && <LayoutBanner />}
         {props.children}
         {!isHiddenFooter && <LayoutFooter />}
      </>
   );
}
