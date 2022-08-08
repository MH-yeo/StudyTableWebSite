import { useEffect, useRef, useState } from "react";
import SectionHomeInfoUI from "./SectionHomeInfo.presenter";

export default function SectionHomeInfo() {
   const [info, setInfo] = useState(true);
   const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

   const setInfoToggle = () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      setInfo((prev) => !prev);
   };

   useEffect(() => {
      intervalRef.current = setTimeout(setInfoToggle, 5000);
      return () => {
         clearInterval(intervalRef.current as NodeJS.Timeout);
      };
   });

   const onClickInfoTrue = () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      setInfo(true);
   };
   const onClickInfoFalse = () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      setInfo(false);
   };

   return (
      <>
         <SectionHomeInfoUI
            info={info}
            onClickInfoTrue={onClickInfoTrue}
            onClickInfoFalse={onClickInfoFalse}
         />
      </>
   );
}
