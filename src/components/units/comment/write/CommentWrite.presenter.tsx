import * as S from "./CommentWrite.styles";
import { Rate } from "antd";

export default function CommenWriteUI(props) {
   return (
      <S.CommentInput>
         <S.CommentSeperator></S.CommentSeperator>
         <S.CommentInputHeader>
            <S.InputLeft>
               <>
                  <S.Input
                     placeholder="작성자"
                     onChange={props.onChangeWriter}
                     value={props.isEditId ? props.writer : props.defaultWriter}
                     defaultValue={
                        props.isEditId ? props.writer : props.defaultWriter
                     }
                  ></S.Input>
                  <S.Input
                     placeholder="비밀번호"
                     onChange={props.onChangePassword}
                     value={props.isEditId ? undefined : props.password}
                  ></S.Input>
                  <Rate
                     onChange={props.setRating}
                     value={props.defaultRating}
                     defaultValue={props.isEditId ? props.rating : 5}
                  />
               </>
            </S.InputLeft>
            <S.UnfoldBox>
               {props.isEditId ? (
                  <S.UnfoldComment
                     onClick={props.onClickUnfold}
                     src="/board/detail/return.png"
                  ></S.UnfoldComment>
               ) : (
                  ""
               )}
            </S.UnfoldBox>
         </S.CommentInputHeader>
         <S.CommentInputFooter>
            <S.CommentTextArea
               onChange={props.onChangeComment}
               placeholder="말은 사라지지만 댓글은 남습니다."
               value={props.isEditId ? undefined : props.comment}
               defaultValue={props.isEditId && props.contents}
            ></S.CommentTextArea>
            <S.CommentButton
               type="primary"
               onClick={
                  props.isEditId
                     ? props.onClickUpdateComment
                     : props.onClickComment
               }
            >
               {props.isEditId ? "수정" : "입력"}
            </S.CommentButton>
         </S.CommentInputFooter>
      </S.CommentInput>
   );
}
