import Link from "next/link";
import styled from "@emotion/styled";
import { CloseOutlined } from "@ant-design/icons";

const Background = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: rgba(0, 0, 0, 0.8);
`;

const Wrapper = styled.div`
   position: absolute;
   right: 0;
   top: 0;
   width: 300px;
   height: 100vh;
   display: flex;
   flex-direction: column;
   background-color: white;
   box-shadow: 0 0 5px 0 #00a1ff;
`;

const SideBarMenuBanner = styled.div`
   width: 100%;
   height: 200px;
   background: linear-gradient(to bottom right, #00a1ff, #00c1ff);
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 20px;
`;

const StyledAtag = styled.a`
   display: inline-block;
   width: 100%;
   font-size: 18px;
   color: #212529;
`;

const LinkWrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

export const Styledh1 = styled.h1`
   color: white;
`;

export const Styledh2 = styled.h2`
   font-weight: 300;
   color: white;
`;

export const LinkContainer = styled.div`
   margin-bottom: 20px;
`;

export const XIcon = styled(CloseOutlined)`
   display: flex;
   justify-content: flex-end;
   font-size: 24px;
   color: white;
   margin-bottom: 20px;
`;

export default function SideBarMenu(props) {
   return (
      <Background id="background">
         <Wrapper ref={props.menuRef}>
            <SideBarMenuBanner>
               <XIcon onClick={() => props.setIsClickMenu(false)} />
               <Styledh2>신개념 좌석관리 솔루션</Styledh2>
               <Styledh1>스터디테이블</Styledh1>
            </SideBarMenuBanner>
            <LinkWrapper>
               <LinkContainer>
                  <Link href="/pricing">
                     <StyledAtag
                        className="menu-item"
                        onClick={() => props.setIsClickMenu(false)}
                     >
                        이용안내
                     </StyledAtag>
                  </Link>
               </LinkContainer>
               <LinkContainer>
                  <Link href="admin/login">
                     <StyledAtag
                        className="menu-item"
                        onClick={() => props.setIsClickMenu(false)}
                     >
                        점주님 로그인
                     </StyledAtag>
                  </Link>
               </LinkContainer>
               <LinkContainer>
                  <Link href="/#form">
                     <StyledAtag
                        className="menu-item"
                        onClick={() => props.setIsClickMenu(false)}
                     >
                        상담문의
                     </StyledAtag>
                  </Link>
               </LinkContainer>
            </LinkWrapper>
         </Wrapper>
      </Background>
   );
}
