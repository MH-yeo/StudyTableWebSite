import { Controller } from "react-hook-form";
import { RightOutlined } from "@ant-design/icons";
import * as S from "./SectionHomeForm.styles";
import ButtonSubmit01 from "../../../../commons/buttons/submit01/ButtonSubmit01";
import { phoneNumHypen } from "../../../../../commons/utilities/phonNumHypen";

export default function SectionHomeFormUI(props) {
   return (
      <S.Section id="form">
         <S.TextWrapper>
            <S.MainP ref={props.bottomRef}>
               지금 바로
               <br />
               상담 받아보세요
            </S.MainP>
            <S.Context>
               부담없이 무료 상담을 받아보세요. <br />
               전문 컨설턴트가 내 매장 맞춤 상담을 도와드립니다.
               <br />
            </S.Context>
         </S.TextWrapper>
         <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <S.InputGroup>
               <S.InputWrapper>
                  <Controller
                     name="storeName"
                     control={props.control}
                     render={({ field }) => <S.InputBox {...field} />}
                  />
                  <S.Label>매장 이름 (필수)</S.Label>
               </S.InputWrapper>
               <S.InputWrapper>
                  <Controller
                     name="phoneNum"
                     control={props.control}
                     render={({ field: { onChange, value } }) => (
                        <S.InputBox
                           onChange={onChange}
                           maxLength={13}
                           value={phoneNumHypen(value)}
                        />
                     )}
                  />
                  <S.Label>휴대전화 번호 (필수)</S.Label>
               </S.InputWrapper>
               <S.InputWrapper>
                  <Controller
                     name="address"
                     control={props.control}
                     render={({ field }) => <S.InputBox {...field} />}
                  />
                  <S.Label>
                     지역 (필수)<S.MySpan>ex. 서울시 역삼동</S.MySpan>
                  </S.Label>
               </S.InputWrapper>
               <S.InputWrapper>
                  <Controller
                     name="seats"
                     control={props.control}
                     render={({ field }) => <S.InputBox {...field} />}
                  />
                  <S.Label>
                     예상 관리 좌석 (필수)<S.MySpan>ex. 5 좌석</S.MySpan>
                  </S.Label>
               </S.InputWrapper>
               <S.PolicyWrapper>
                  <S.PolicyLabel htmlFor="policy">
                     <Controller
                        name="checkbox"
                        control={props.control}
                        render={({ field: { onChange, value } }) => (
                           <S.PolicyCheckBox
                              type="checkbox"
                              id="policy"
                              onChange={onChange}
                              checked={value}
                           />
                        )}
                     />
                     <S.PolicySpan>개인정보 수집 이용 동의</S.PolicySpan>
                  </S.PolicyLabel>
                  <div>
                     <RightOutlined
                        onClick={props.onClickToPrivacyPolicy}
                        style={{ cursor: "pointer" }}
                     />
                  </div>
               </S.PolicyWrapper>
               <ButtonSubmit01
                  width={"100%"}
                  title="상담요청"
                  disabled={!props.formState.isValid}
               />
            </S.InputGroup>
         </form>
      </S.Section>
   );
}
