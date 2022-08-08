import styled from "@emotion/styled";

export const Background = styled.div`
   display: flex;
   justify-content: center;
   padding-top: 150px;
   padding-bottom: 150px;
   background-color: #f8f8f8;
`;
export const MyPage = styled.div`
   width: 800px;
   height: 700px;
   display: flex;
   flex-direction: column;
   overflow: auto;
   border-radius: 10px;
   background-color: white;
`;
export const SideBarWrapper = styled.div`
   width: 175px;
   height: 620px;
   box-shadow: 1px 2px 3px #c4c4c4;
   background-color: white;
   border-radius: 10px;
   margin-right: 32px;
   padding: 15px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const ProfileWrapper = styled.div`
   display: flex;
`;
export const MyPoint = styled.div`
   padding: 15px 0px 5px 0px; ;
`;
export const NamePointWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;
export const LayoutSideBar = styled.div`
   height: 100%;
   box-shadow: 1px 2px 3px #c4c4c4;
   background-color: white;
   border-radius: 10px;
   margin-bottom: 20px;
`;
export const Profile = styled.img`
   margin-right: 10px;
`;
export const ResetButton = styled.button`
   border: none;
   border-radius: 10px;
   font-weight: bold;
   :hover {
      background-color: #e6e6e6;
   }
   margin-bottom: 75px;
`;

export const DivWidth100 = styled.div`
   width: 100%;
`;
export const PickedItemMenu = styled.div`
   width: 100px;
   display: flex;
   align-items: center;
   font-size: 16px;
   padding-bottom: 16px;
   cursor: pointer;
   :hover {
      font-weight: 700;
      opacity: 0.6;
   }
   font-weight: ${(props: any) => (props.menuState ? "700" : "500")};
   color: ${(props: any) => (props.menuState ? "black" : "#c6c6c6")};
`;
export const LogOutMenu = styled.div`
   width: 100px;
   display: flex;
   align-items: center;
   font-size: 16px;
   padding-bottom: 16px;
   margin-top: 200px;
   cursor: pointer;
   :hover {
      font-weight: 700;
   }
   font-weight: ${(props: any) => (props.menuState ? "700" : "500")};
`;
export const MenuTitle = styled.span`
   margin-left: 10px;
`;
