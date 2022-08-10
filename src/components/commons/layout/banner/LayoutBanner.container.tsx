import { useEffect, useState } from "react";
import LayoutBannerUI from "./LayoutBanner.presenter";

export default function LayoutBanner() {
   const [isMobile, setIsMobile] = useState(false);
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

   return <LayoutBannerUI isMobile={isMobile} />;
}
