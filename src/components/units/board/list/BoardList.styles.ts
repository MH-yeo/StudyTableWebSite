import styled from "@emotion/styled";
import { Button } from "antd";

export const Background = styled.div`
   display: flex;
   justify-content: center;
   padding-top: 150px;
   padding-bottom: 150px;
   background-color: #f8f8f8;
`;
export const Wrapper = styled.div`
   /* sidebar far from 32px*/
   padding-left: 32px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
export const TableWrapper = styled.div`
   width: 975px;
   display: flex;
   flex-direction: column;
   box-shadow: 1px 2px 3px #c4c4c4;
   background-color: white;
   border-radius: 10px;
`;
export const TableBody = styled.div`
   display: flex;
   flex-direction: column;
`;
export const TableRow = styled.div`
   display: flex;
   flex-direction: row;
   border-top: 2px solid #eff0ed !important;
   font-size: 16px;
   padding: 8px 0px;
   :hover {
      background-color: #eff0ed;
   }
`;
export const TableRowHead = styled.div`
   display: flex;
   flex-direction: row;
   border-bottom: 1px solid #eff0ed !important;
   font-size: 16px;
`;
// table header //
export const TableHeadCentered = styled.th`
   width: 15%;
   text-align: center;
   padding: 0px 12px;
`;
export const TableHeadTitle = styled.th`
   width: 55%;
   padding: 0px 12px;
`;
// table body //
export const TableDataCentered = styled.td`
   width: 15%;
   text-align: center;
   color: #666666;
   font-weight: 350;
   padding: 0px 12px;
`;
export const TableDataTitle = styled.td`
   width: 55%;
   cursor: pointer;
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
export const Word = styled.span`
   color: ${(props: any) => (props.isMatched ? "red" : "black")};
`;
