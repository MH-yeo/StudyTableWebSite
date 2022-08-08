import * as S from "./Pagination01.styles";

export default function Pagination01UI(props) {
   return (
      <S.Wrapper>
         <S.PrevArrow
            onClick={props.onClickToPrevPage}
            src="/board/list/arrowleft.png"
         />
         {new Array(10)
            .fill(1)
            .filter((_, i) => props.lastPage - props.startPage >= i)
            .map((_, i) => (
               <S.PageNum
                  key={i}
                  id={props.startPage + i}
                  onClick={props.onClickToPage}
               >
                  {props.startPage + i}
               </S.PageNum>
            ))}
         <S.NextArrow
            onClick={props.onClickToNextPage}
            src="/board/list/arrowright.png"
         />
      </S.Wrapper>
   );
}
