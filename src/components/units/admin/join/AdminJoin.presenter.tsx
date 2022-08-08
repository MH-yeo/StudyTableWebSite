import { Controller } from "react-hook-form";
import { phoneNumHypen } from "../../../../commons/utilities/phonNumHypen";
import ButtonSubmit02 from "../../../commons/buttons/submit02/ButtonSubmit02";
import * as S from "./AdminJoin.styles";

export default function AdminJoinUI(props) {
   return (
      <S.Wrapper>
         <S.Title>
            로그인 및 회원가입
            <S.MySpan>
               을<br /> 시작합니다.
            </S.MySpan>
         </S.Title>
         <S.MyButtonKakao>
            <S.KakaoSymbol src="/admin/kakao-symbol.png" />
            카카오로 <div>&nbsp;</div>
            <b>간편로그인</b>
         </S.MyButtonKakao>
         <S.MyButtonEmailStart onClick={props.onClickStart}>
            <S.MyMailOutlined />
            이메일로 시작하기
         </S.MyButtonEmailStart>
         <S.Information>
            버튼을 눌러 가입시 <a href="">이용약관</a>과
            <a href="/info/privacy.policy.html"> 개인정보처리방침</a>에
            동의합니다.
         </S.Information>
         <S.FormWrapper>
            <form>
               <S.EmailWrapper start={+props.start}>
                  <S.EmailInput
                     ref={props.emailInputRef}
                     value={props.email}
                     onChange={props.onChageEmail}
                     onKeyDown={props.onKeyPressEnter}
                     placeholder="이메일"
                     isValidEmail={props.isValidEmail}
                  />
                  <S.EmailText isValid={props.isValidEmail}>
                     {props.isValidEmail
                        ? "유효한 형식의 이메일입니다."
                        : "이메일을 입력해주세요."}
                  </S.EmailText>
                  {!props.next && (
                     <ButtonSubmit02
                        title={"다음"}
                        type={"button"}
                        onClick={props.onClickNext}
                        disabled={!props.isValidEmail}
                     />
                  )}
               </S.EmailWrapper>
               <S.FormInputWrapper next={+props.next}>
                  <h2>회원가입을 진행합니다.</h2>
                  <Controller
                     name="name"
                     control={props.control}
                     render={({ field: { onChange } }) => (
                        <S.FormInput
                           ref={props.nameInputRef}
                           onChange={onChange}
                           placeholder="이름"
                           isValid={props.formState.isValid}
                        />
                     )}
                  />
                  <S.ErrorText>
                     {props.formState.errors.name?.message}
                  </S.ErrorText>
                  <Controller
                     name="phoneNum"
                     control={props.control}
                     render={({ field: { onChange, value } }) => (
                        <S.FormInput
                           onChange={onChange}
                           value={phoneNumHypen(value)}
                           placeholder="휴대폰 번호"
                           maxLength={13}
                           isValid={props.formState.isValid}
                        />
                     )}
                  />
                  <S.ErrorText>
                     {props.formState.errors.phoneNum?.message}
                  </S.ErrorText>
                  <S.FormInput
                     {...props.register("password")}
                     type={"password"}
                     maxLength={13}
                     placeholder="비밀번호"
                     isValid={props.formState.isValid}
                  />
                  <S.ErrorText>
                     {props.formState.errors.password?.message}
                  </S.ErrorText>
                  <S.FormInput
                     {...props.register("passwordAgain")}
                     type={"password"}
                     maxLength={13}
                     placeholder="비밀번호 확인"
                     isValid={props.formState.isValid}
                  />
                  <S.ErrorText>
                     {props.formState.errors.passwordAgain?.message}
                  </S.ErrorText>
                  {props.next && (
                     <ButtonSubmit02
                        title={"가입 신청"}
                        type={"button"}
                        disabled={false}
                        onClick={props.handleSubmit(props.onClickSubmit)}
                     />
                  )}
               </S.FormInputWrapper>
            </form>
         </S.FormWrapper>
      </S.Wrapper>
   );
}
