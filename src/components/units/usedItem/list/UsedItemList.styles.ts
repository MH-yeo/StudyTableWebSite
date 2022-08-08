import styled from "@emotion/styled";

export const Background = styled.div`
   display: flex;
   justify-content: center;
   padding-top: 150px;
   padding-bottom: 150px;
   background-color: #f8f8f8;
`;
export const Wrapper = styled.div`
   /* sidebar far from 32px*/
   position: relative;
   padding-left: 32px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
export const SideWrapper = styled.div`
   height: 700px;
   display: flex;
   flex-direction: column;
   justify-content: ${(props: any) =>
      props.isThreeItem ? "space-between" : "none"};
`;
export const ItemsWrapper = styled.div`
   width: 800px;
   height: 700px;
   display: flex;
   flex-direction: column;
   overflow: auto;
   border-radius: 10px;
`;
export const Item = styled.div`
   display: flex;
   background-color: white;
   /* border-radius: 10px; */
   border-bottom: 1px solid #bdbdbd;
   padding: 20px 15px;
   :hover {
      background-color: #e6e6e6;
      cursor: pointer;
   }
`;
export const WriteIcon = styled.div`
   position: absolute;
   bottom: 15px;
   right: 30px;
   width: 50px;
   height: 50px;
   border-radius: 100%;
   font-size: 20px;
   line-height: 0;
   background-color: #00a1ff;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   :hover {
      opacity: 80%;
   }
`;

export const ItemImage = styled.img`
   width: 150px;
   height: 150px;
   object-fit: cover;
   border-radius: 10px;
`;
export const ItemContents = styled.div`
   display: flex;
   flex-direction: column;
   border-radius: 10px;
   padding-left: 20px;
`;
export const ItemName = styled.div`
   font-size: 24px;
`;
export const ItemAddress = styled.div`
   color: #c6c6c6;
   font-size: 16px;
`;
export const ItemStatus = styled.div`
   background-color: red;
   color: #ffffff;
   font-size: 18px;
`;
export const ItemPrice = styled.div`
   display: flex;
   font-weight: 700px;
   font-size: 18px;
`;
export const PickedCount = styled.div`
   display: flex;
   align-items: center;
   font-size: 14px;
   color: #00000099;
   margin-left: 10px;
`;
export const GrayLine = styled.div`
   width: 100%;
   padding: 0px 12px;
   border: 1px solid #bdbdbd;
`;
