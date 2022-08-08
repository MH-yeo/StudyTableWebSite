import * as S from "./Collapse1.styles";

export default function Collapse1UI(props) {
   return (
      <>
         <S.FaqWrapper onClick={props.onClickSetToggle}>
            <S.Myh4 toggle={+props.toggle}>{props.title}</S.Myh4>
            <S.LeftArrow toggle={+props.toggle} />
         </S.FaqWrapper>
         <S.Text toggle={+props.toggle}>{props.context}</S.Text>
      </>
   );
}
