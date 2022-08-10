import * as S from "./LayoutBanner.styles";

export default function LayoutBannerUI(props) {
   return (
      <>
         <S.Wrapper>
            <S.BannerBackGround>
               <S.ContentsWrapper>
                  <S.TextWrapper>
                     {!props.isMobile && (
                        <S.MainP>매장 좌석관리의 새로운 방법</S.MainP>
                     )}
                     {props.isMobile && (
                        <S.MainP>
                           매장 좌석관리의
                           <br /> 새로운 방법
                        </S.MainP>
                     )}
                     <S.SubP>
                        운영하는 매장의 효과적인 좌석관리가 필요할땐,
                     </S.SubP>
                     <S.SubP>
                        매장 좌석관리 서비스 스터디테이블을 이용해보세요.
                     </S.SubP>
                  </S.TextWrapper>
               </S.ContentsWrapper>
            </S.BannerBackGround>
         </S.Wrapper>
      </>
   );
}
