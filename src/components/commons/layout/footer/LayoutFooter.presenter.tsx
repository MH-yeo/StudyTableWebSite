import * as S from "./LayoutFooter.styles";

export default function LayoutFooterUI(props) {
   return (
      <>
         <S.Wrapper>
            <S.TextWrapper>
               <S.Mydiv>회사소개</S.Mydiv>
               <S.GraySectionLine />
               <S.Mydiv>제휴안내</S.Mydiv>
               <S.GraySectionLine />
               <S.Mydiv>광고안내</S.Mydiv>
               <S.GraySectionLine />
               <S.Mydiv onClick={props.onClickToPrivacyPolicy}>
                  개인정보처리방침
               </S.Mydiv>
               <S.GraySectionLine />
               <S.Mydiv>이용약관</S.Mydiv>
            </S.TextWrapper>
            <div>Copyright ⓒ 2022 - Mh-yeo. All rights reserved.</div>
         </S.Wrapper>
      </>
   );
}
