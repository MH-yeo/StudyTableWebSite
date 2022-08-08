import styled from "@emotion/styled";
import { Button } from "antd";

export const MyPage = styled.div`
   width: 800px;
   height: 700px;
   display: flex;
   flex-direction: column;
   overflow: auto;
   border-radius: 10px;
   /* background-color: white; */
`;

export const Wrapper = styled.div`
   /* sidebar far from 32px*/
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
export const TableWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   box-shadow: 1px 2px 3px #c4c4c4;
   background-color: white;
   border-radius: 10px;
   margin-top: 35px;
`;
export const TableBody = styled.div`
   display: flex;
   flex-direction: column;
`;
export const TableRow = styled.tr<{ isDelete: string }>`
   display: flex;
   flex-direction: row;
   border-top: 2px solid #eff0ed !important;
   font-size: 16px;
   padding: 8px 0px;
   background-color: ${(props: any) => (props.isDelete ? "#d6d6d6" : null)};
   text-decoration: ${(props: any) => (props.isDelete ? "line-through" : null)};
   :hover {
      background-color: ${(props: any) => (props.isDelete ? null : "#eff0ed")};
      cursor: pointer;
   }
`;
export const TableRowHead = styled.tr`
   display: flex;
   flex-direction: row;
   border-bottom: 1px solid #eff0ed !important;
   font-size: 16px;
`;
// table header //
export const TableHeadCentered = styled.th`
   width: 20%;
   text-align: center;
   padding: 0px 12px;
`;
export const TableHeadTitle = styled.th`
   width: 55%;
   padding: 0px 12px;
`;
// table body //
export const TableDataCentered = styled.td`
   width: 20%;
   text-align: center;
   color: #666666;
   font-weight: 350;
   padding: 0px 12px;
`;
export const TableDataTitle = styled.td`
   width: 55%;
   font-weight: bold;
   padding: 0px 12px;
`;
//
export const GrayLine = styled.div`
   width: 100%;
   padding: 0px 12px;
   border: 1px solid #bdbdbd;
`;
export const Footer = styled.div`
   width: 975px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Pagina = styled.div`
   display: flex;
   flex-direction: column;

   margin-top: 40px;
   margin-bottom: 30px;
   margin-left: auto;
   margin-right: auto;
   color: black;
   text-align: center;
`;

export const SearchWrite = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;
export const Serach = styled.div``;
export const Write = styled(Button)`
   width: 125px;
   height: 40px;
   font-family: "Noto Sans CJK KR";
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   border-radius: 5px;
`;
export const Word = styled.span<{ isMatched: boolean }>`
   color: ${(props: any) => (props.isMatched ? "red" : "black")};
`;
export const MyShopMenu = styled.div`
   width: 100%;
   display: flex;
   padding-top: 20px;
   font-size: 15px;
   align-items: center;
`;
export const Picked = styled.div<{ isPickedMenu: boolean }>`
   color: ${(props: any) => (props.isPickedMenu ? "black" : "#c6c6c6")};
   cursor: pointer;
   :hover {
      opacity: 0.6;
   }
`;
export const SectionLine = styled.div`
   height: 18px;
   border-left: 1px solid gray;
   margin: 0px 10px;
`;
export const MyItem = styled.div<{ isPickedMenu: boolean }>`
   color: ${(props: any) => (props.isPickedMenu ? "#c6c6c6" : "black")};
   cursor: pointer;
   :hover {
      opacity: 0.6;
   }
`;
