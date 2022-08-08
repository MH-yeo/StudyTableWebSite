import styled from "@emotion/styled";
import { useRef } from "react";
import SectionHomeForm from "../src/components/units/section/home/form/SectionHomeForm.container";
import SectionHomeInfo from "../src/components/units/section/home/info/SectionHomeInfo.container";

const Wrapper = styled.div``;

export default function Home() {
   const bottomRef = useRef<HTMLElement>(null);

   return (
      <>
         <Wrapper>
            <SectionHomeInfo />
            <SectionHomeForm bottomRef={bottomRef} />
         </Wrapper>
      </>
   );
}
