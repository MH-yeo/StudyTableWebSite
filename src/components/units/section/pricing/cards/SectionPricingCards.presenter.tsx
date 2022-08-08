import * as S from "./SectionPricingCards.styles";

export default function SectionPricingCardsUI(props) {
   return (
      <S.Section>
         <S.Wrapper>
            <S.Header>
               나에게 딱 맞는
               <br />
               요금제를 선택해주세요
            </S.Header>
            <S.Cards onClick={props.onClickFormButton}>
               <S.CardElement>
                  <S.CardHeader1>
                     <S.Title>가장 혜택이 큰</S.Title>
                     <S.Period>3년 약정</S.Period>
                  </S.CardHeader1>
                  <S.CardBody>
                     <S.OriginalCost>
                        <del>1,638,000원</del>
                     </S.OriginalCost>
                     <S.DiscountedCost>
                        <S.HighLightSpan>약 34% 할인</S.HighLightSpan>
                        <S.NomalSpan> 1,080,000원</S.NomalSpan>
                     </S.DiscountedCost>
                     <S.Benefit>
                        정상가 대비 558,000원 할인
                        <br />
                        문자 4,000건 무료(160,000원 상당)
                     </S.Benefit>
                     <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                     >
                        <S.ToFormButton>상담 문의</S.ToFormButton>
                     </div>
                  </S.CardBody>
               </S.CardElement>
               <S.CardElement>
                  <S.CardHeader2>
                     <S.Title>가장 많이 선택하는</S.Title>
                     <S.Period>2년 약정</S.Period>
                  </S.CardHeader2>
                  <S.CardBody>
                     <S.OriginalCost>
                        <del>1,092,000원</del>
                     </S.OriginalCost>
                     <S.DiscountedCost>
                        <S.HighLightSpan>약 23% 할인</S.HighLightSpan>
                        <S.NomalSpan> 840,000원</S.NomalSpan>
                     </S.DiscountedCost>
                     <S.Benefit>
                        정상가 대비 252,000원 할인
                        <br />
                        문자 2,600건 무료(114,400원 상당)
                     </S.Benefit>
                     <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                     >
                        <S.ToFormButton>상담 문의</S.ToFormButton>
                     </div>
                  </S.CardBody>
               </S.CardElement>
               <S.CardElement>
                  <S.CardHeader3>
                     <S.Title>가장 부담이 없는</S.Title>
                     <S.Period>1년 약정</S.Period>
                  </S.CardHeader3>
                  <S.CardBody>
                     <S.OriginalCost>
                        <del>546,000원</del>
                     </S.OriginalCost>
                     <S.DiscountedCost>
                        <S.HighLightSpan>약 12% 할인</S.HighLightSpan>
                        <S.NomalSpan> 480,000원</S.NomalSpan>
                     </S.DiscountedCost>
                     <S.Benefit>
                        정상가 대비 66,000원 할인
                        <br />
                        문자 1,200건 무료(57,600원 상당)
                     </S.Benefit>
                     <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                     >
                        <S.ToFormButton>상담 문의</S.ToFormButton>
                     </div>
                  </S.CardBody>
               </S.CardElement>
            </S.Cards>
            <S.List>
               <li>
                  <strong style={{ color: "#363a3c" }}>
                     카카오톡 알림톡 무제한 지원됩니다
                  </strong>
               </li>
               <li>VAT 포함 금액입니다</li>
               <li>초기 설치비 5만원 별도입니다</li>
               <li>
                  태블릿 렌탈 혹은 별도 구매 가능합니다{" "}
                  <S.TabletButton onClick={props.onClickSetVisible}>
                     스터디테이블 호환 태블릿 보기
                  </S.TabletButton>
               </li>
               <li>무료 문자는 가입 시에 일괄 지급됩니다</li>
               <li>
                  모든 서비스는 일시납으로 진행됩니다(카드결제 or 계좌이체 가능)
               </li>
               <li>
                  카드 결제 시, 무이자 할부 가능합니다(카드사별로 무이자 할부
                  기간 상이)
               </li>
               <li>모든 서비스 가격은 정찰제로 운영됩니다</li>
            </S.List>
         </S.Wrapper>
         <S.MyBackGround src="/pricing/pricing-background.jpeg" />
      </S.Section>
   );
}
