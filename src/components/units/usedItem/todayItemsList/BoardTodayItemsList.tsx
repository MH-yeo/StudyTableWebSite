import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
   width: 175px;
   display: flex;
   flex-direction: column;
`;

const MainTitle = styled.div`
   width: 100%;
   height: 50px;
   font-size: 18px;
   color: #ffffff;
   background-color: #00a1ff;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 10px 10px 0px 0px; ;
`;
const TailTitle = styled.div`
   width: 100%;
   height: 50px;
   color: #ffffff;
   background-color: #00a1ff;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 0px 0px 10px 10px; ;
`;

const ItemsTitle = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;
const ArrowBox = styled.div`
   text-align: center;
   font-size: 32px;
   line-height: 0;
   cursor: pointer;
`;

const LayoutTodayItems = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   border-radius: 10px;
   background-color: white;
   box-shadow: 1px 2px 3px #c4c4c4;
`;

const ItemWrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: ${(props: any) =>
      props.isOneItem ? "center" : "space-between"};
   overflow: auto;
`;
export const ItemImage = styled.img`
   width: 90px;
   height: 90px;
   object-fit: cover;
   border-radius: 10px;
`;
const date = new Date();
const todayDate = date.toISOString().split("T")[0];
export default function BoardTodayItemsList({ clickedItems }) {
   const router = useRouter();
   const [idx, setIdx] = useState(0);
   const todayItemsList = clickedItems.filter((el) => {
      return todayDate === el.todayDate;
   });
   const onClickToItem = (el) => () => {
      router.push(`/useditems/${[el._id]}`);
   };
   const onClickPrev = () => {
      if (idx !== 0) setIdx((prev) => prev - 1);
   };
   const onClickNext = () => {
      if (idx + 3 !== todayItemsList.length) setIdx((prev) => prev + 1);
   };
   console.log(todayItemsList);
   return (
      <Wrapper>
         <LayoutTodayItems>
            {todayItemsList.length !== 0 && (
               <>
                  <MainTitle>
                     <div>오늘본상품</div>
                  </MainTitle>
                  <ArrowBox onClick={onClickPrev}>
                     <CaretUpOutlined />
                  </ArrowBox>
                  <ItemWrapper isOneItem={todayItemsList.length === 1}>
                     {todayItemsList
                        .map((el, i) => {
                           return (
                              <div
                                 key={uuidv4()}
                                 onClick={onClickToItem(el)}
                                 style={{
                                    cursor: "pointer",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                 }}
                              >
                                 <ItemImage
                                    src={`https://storage.googleapis.com/${el.images[0]}`}
                                    onError={({ currentTarget }) => {
                                       currentTarget.onerror = null; // prevents looping
                                       currentTarget.src =
                                          "/useditem/image-default.png";
                                    }}
                                 />
                                 <ItemsTitle>{el.name}</ItemsTitle>
                              </div>
                           );
                        })
                        .filter((_, i) => {
                           return i < 3 + idx && i >= 0 + idx;
                        })}
                  </ItemWrapper>
                  <ArrowBox onClick={onClickNext}>
                     <CaretDownOutlined />
                  </ArrowBox>
                  <TailTitle></TailTitle>
               </>
            )}
         </LayoutTodayItems>
      </Wrapper>
   );
}
