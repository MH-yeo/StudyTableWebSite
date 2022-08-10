import styled from "@emotion/styled";
import { forwardRef } from "react";

const Wrapper = styled.div`
   position: absolute;
   right: 0;
   top: 0;
   width: 300px;
   height: 100vh;
   display: flex;
   flex-direction: column;
   border: 1px solid black;
   backdrop-filter: blur(5px);
`;

export const SideBarMenu = forwardRef((props, ref) => {
   console.log("this is test ref", ref);
   return (
      <div ref={ref}>
         <Wrapper>
            <a className="menu-item" href="/">
               Home
            </a>

            <a className="menu-item" href="/about">
               About
            </a>

            <a className="menu-item" href="/services">
               Services
            </a>

            <a className="menu-item" href="/contact">
               Contact us
            </a>
         </Wrapper>
      </div>
   );
});
