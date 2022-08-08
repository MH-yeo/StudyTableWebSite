import Collapse1 from "../../../../commons/collapse/Collapse1.conainer";
import * as S from "./SectionPricingFaq.styles";

export default function SectionPricingFaqUI() {
   return (
      <S.Section>
         <S.Wrapper>
            <S.Header>자주 묻는 질문을 확인해보세요</S.Header>
            <div>
               <Collapse1
                  title={"포스기 기종과 상관있나요?"}
                  context={
                     "윈도우 기반 포스라면 포스기 유무, 포스기 종류에 관계없이 모두 사용하실 수 있습니다. * 태블릿 기반 포스는 지원하지 않습니다. (체크포스 / 아이포스 등)"
                  }
               />
               <Collapse1
                  title={"가입하면 다음날 바로 사용할 수 있나요?"}
                  context={
                     "서비스에 가입하시면 영업일 기준 1-2일 내로 담당자가 연락드리며, 서비스 사용에 필요한 안내물을 포함한 웰컴키트를 배송해드립니다. 웰컴키트 수령 후 담당자와 약속한 시간에 원격으로 설치를 진행하시면 즉시 사용하실 수 있습니다. 가입 후 설치까지는 약 일주일 정도가 소요됩니다."
                  }
               />
               <Collapse1
                  title={"폐업하면 어떻게 되나요?"}
                  context={
                     "폐업으로 인한 서비스 종료 시에는 폐업확인서만 제출하시면 위약금 없이 해지하실 수 있습니다."
                  }
               />
               <Collapse1
                  title={"가입 후 추가 비용이 있나요?"}
                  context={
                     "첫 설치 시 서버 개설비, 가맹비 명목의 초기 비용이 5만 원 발생합니다. 초기 비용은 서비스 연장이나 재계약 시에는 발생하지 않습니다. 서비스 사용 중에는 문자 발송 비용과 광고 매체 비가 약 건당 40원(집행 규모에 따라 ±10원 정도 차이) 발생합니다. 그 외에 모든 서비스는 별도의 추가 비용 없이 사용할 수 있습니다."
                  }
               />
            </div>
         </S.Wrapper>
      </S.Section>
   );
}
