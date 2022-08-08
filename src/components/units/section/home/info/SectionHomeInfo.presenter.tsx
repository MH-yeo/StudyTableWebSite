import * as S from "./SectionHomeInfo.styles";

const IMG_DIR = ["/home/info-1.png", "/home/automation.jpeg"];

export default function SectionHomeInfoUI(props) {
   return (
      <>
         <S.Section>
            <S.TextWrapper>
               <S.MainP>
                  맞춤 좌석 관리 시스템으로
                  <br />
                  매출을 올려보세요
               </S.MainP>
               <S.Tab>
                  <S.SubPWrapper>
                     <S.SubP info={!props.info} onClick={props.onClickInfoTrue}>
                        좌석 공유 등록
                     </S.SubP>
                     {props.info && <S.BlueUnderLine />}
                  </S.SubPWrapper>
                  <S.SubPWrapper>
                     <S.SubP info={props.info} onClick={props.onClickInfoFalse}>
                        자동 관리 시스템
                     </S.SubP>
                     {!props.info && <S.BlueUnderLine />}
                  </S.SubPWrapper>
               </S.Tab>
               {props.info && (
                  <S.Context>
                     손쉽게 새로운 비지니스를 도입하세요. <br />
                     많은 점주 분들이 스터디테이블을 이용하여 <br />
                     매출의 증대를 경험하고 있습니다.
                  </S.Context>
               )}
               {!props.info && (
                  <S.Context>
                     좌석 운영 부터 정산까지 <br />
                     스터디테이블의 스마트 매니징 시스템 <br />
                     누구나 손쉽게 운영 가능합니다.
                  </S.Context>
               )}
            </S.TextWrapper>
            {props.info && (
               <S.MyImgWrapper info={props.info}>
                  <S.MyImg src={props.info ? IMG_DIR[0] : IMG_DIR[1]} />
               </S.MyImgWrapper>
            )}
            {!props.info && (
               <S.MyImgWrapper info={!props.info}>
                  <S.MyImg src={props.info ? IMG_DIR[0] : IMG_DIR[1]} />
               </S.MyImgWrapper>
            )}
         </S.Section>
      </>
   );
}
