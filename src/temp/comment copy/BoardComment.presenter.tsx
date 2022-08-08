import * as S from "./BoardComment.styles";

export default function CommenWriteUI(props) {
   return (
      <S.CommentInput>
         <S.CommentSeperator></S.CommentSeperator>
         <S.CommentInputHeader>
            <S.InputLeft>
               <S.Input
                  placeholder="작성자"
                  onChange={props.onChangeWriter}
                  defaultValue={props.writer}
               ></S.Input>
               <S.Input
                  placeholder="비밀번호"
                  onChange={props.onChangePassword}
               ></S.Input>
            </S.InputLeft>
         </S.CommentInputHeader>
         <S.CommentInputFooter>
            <S.CommentTextArea
               onChange={props.onChangeComment}
               placeholder="말은 사라지지만 댓글은 남습니다."
               defaultValue={props.contents}
            ></S.CommentTextArea>
            <S.CommentButton onClick={props.onClickUpdateComment}>
               수정
            </S.CommentButton>
         </S.CommentInputFooter>
      </S.CommentInput>
      ///
   );
}
