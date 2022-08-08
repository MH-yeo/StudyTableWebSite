import * as S from "./LayoutBanner.styles";
import Slider from "react-slick";
import { settings } from "./LayoutBanner.styles";

export default function LayoutBannerUI(props) {
   return (
      <>
         <S.Wrapper>
            {/* <Slider {...settings}> */}
            <S.BannerBackGround>
               <S.ContentsWrapper>
                  <S.TextWrapper>
                     <S.MainP>매장 좌석관리의 새로운 방법</S.MainP>
                     <S.SubP>
                        운영하는 매장의 효과적인 좌석관리가 필요할땐,
                     </S.SubP>
                     <S.SubP>
                        매장 좌석관리 서비스 스터디테이블을 이용해보세요.
                     </S.SubP>
                  </S.TextWrapper>
               </S.ContentsWrapper>
            </S.BannerBackGround>
            {/* <S.Myimg src="/layout/space-wallpaper-2.png"></S.Myimg>
               <S.Myimg src="/layout/space-wallpaper-3.png"></S.Myimg>
               <S.Myimg src="/layout/space-wallpaper-4.jpeg"></S.Myimg> */}
            {/* </Slider> */}
         </S.Wrapper>
      </>
   );
}
