import styled from "@emotion/styled";
import { LeftOutlined } from "@ant-design/icons";

export const FaqWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 5px 0px;
   cursor: pointer;
`;

export const Text = styled.div<{ toggle: boolean }>`
   opacity: ${(props) => (props.toggle ? "1" : "0")};
   max-height: ${(props) => (props.toggle ? "75px" : "0")};
   overflow: hidden;
   transition: all 0.25s ease;
   color: #363a3c;
   padding: 0px 10px;
   font-size: 16px;
`;
export const Myh4 = styled.h4<{ toggle: boolean }>`
   color: #878d91;
   margin-bottom: 0px;
   padding: 16px 0px;
   font-weight: ${(props) => (props.toggle ? "bold" : "500")};
`;

export const LeftArrow = styled(LeftOutlined)<{ toggle: boolean }>`
   font-size: 18px;
   transform: ${(props) => (props.toggle ? "rotate(-90deg)" : "rotate(0)")};
   transition: all 0.25s ease;
`;
