import * as S from "./AdminLogin.styles";

export default function AdminLoginUI(props) {
   return (
      <S.Wrapper>
         <S.Logo onClick={props.onClickToHome} src="/layout/logo.png"></S.Logo>
         <S.MyInputWrapper>
            <S.MyInputID
               value={props.email}
               placeholder="아이디 (메일주소)"
               ref={props.inputRef}
               onChange={props.onChangeEmail}
            />
            <S.MyInputPassWord
               value={props.password}
               type="password"
               placeholder="비밀번호 입력"
               onChange={props.onChangePassWord}
               onKeyPress={props.onKeyPressEnter}
            />
         </S.MyInputWrapper>
         <S.MyButton type="primary" onClick={props.onClickLogin}>
            로그인
         </S.MyButton>
         <S.AuthFindWrapper>
            <S.AuthFindID>아이디 찾기</S.AuthFindID>∙
            <S.AuthFindPassWord>비밀번호 찾기</S.AuthFindPassWord>
         </S.AuthFindWrapper>
         <S.Footer>
            아직 계정이 없으신가요? 지금 바로 <a href="/admin/join">회원가입</a>
            을 해보세요.
         </S.Footer>
      </S.Wrapper>
   );
}
