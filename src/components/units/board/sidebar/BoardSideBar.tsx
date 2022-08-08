import styled from "@emotion/styled";
import { useRouter } from "next/router";
const SideBarWrapper = styled.div`
   width: 175px;
   height: 175px;
   display: flex;
   flex-direction: column;
`;
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 16px;
`;
const MainTitle = styled.div`
   font-size: 18px;
   color: #333;
   font-weight: bold;
`;

const SubTitle = styled.a`
   font-size: 16px;
   padding-left: 10px;
   cursor: pointer;
`;

const LayoutSideBar = styled.div`
   height: 100%;
   box-shadow: 1px 2px 3px #c4c4c4;
   background-color: white;
   border-radius: 10px;
   margin-bottom: 20px;
`;
export default function BoardSideBar() {
   const router = useRouter();

   function onClickToBoards() {
      router.push("/boards/list");
   }
   function onClickToUsedItems() {
      router.push("/useditems/list");
   }

   return (
      <SideBarWrapper>
         <LayoutSideBar>
            <Wrapper>
               <MainTitle>커뮤니티</MainTitle>
               <SubTitle onClick={onClickToBoards}>자유게시판</SubTitle>
               <SubTitle onClick={onClickToUsedItems}>중고장터</SubTitle>
            </Wrapper>
         </LayoutSideBar>
      </SideBarWrapper>
   );
}
