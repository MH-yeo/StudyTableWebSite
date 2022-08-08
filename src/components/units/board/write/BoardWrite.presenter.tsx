import { useRef } from "react";
import * as S from "./BoardWrite.styles";
import { IBoardWriteUI } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUI) {
   const fileRef = useRef<HTMLInputElement>(null);
   const onClickImage = () => {
      fileRef.current?.click();
   };
   return (
      <S.Background>
         <S.Wrapper>
            <S.Header>
               <S.MainTitle>
                  자유게시판 {props.isEdit ? "수정하기" : "글쓰기"}
               </S.MainTitle>
               <S.HeaderContainer>
                  <S.HeaderName>
                     <S.Mandatory>
                        <S.SubTitle>작성자</S.SubTitle>
                        <S.StarMarkup>*</S.StarMarkup>
                     </S.Mandatory>
                     <S.MyInput
                        onChange={props.onChangeName}
                        value={
                           props.isEdit
                              ? props.boardData?.fetchBoard.writer
                              : props.writer
                        }
                        placeholder="이름을 적어주세요."
                     ></S.MyInput>
                     <S.ErrorText>{props.errName}</S.ErrorText>
                  </S.HeaderName>
                  <S.HeaderPw>
                     <S.SubTitle>비밀번호</S.SubTitle>
                     <S.MyInput
                        onChange={props.onChangePw}
                        placeholder="비밀번호를 입력해주세요."
                     ></S.MyInput>
                     <S.ErrorText>{props.errPw}</S.ErrorText>
                  </S.HeaderPw>
               </S.HeaderContainer>
            </S.Header>
            <S.Account>
               <S.MyInput
                  onChange={props.onChangeTitle}
                  defaultValue={props.boardData?.fetchBoard.title}
                  placeholder="제목을 작성해주세요."
               ></S.MyInput>
               <S.ErrorText>{props.errTitle}</S.ErrorText>
            </S.Account>
            <S.Contents>
               <S.TextAreaWrapper>
                  {props.isEdit
                     ? props.boardData?.fetchBoard.youtubeUrl && (
                          <S.YouTubeBox
                             url={
                                !props.youtubeUrl
                                   ? props.boardData?.fetchBoard.youtubeUrl
                                   : props.youtubeUrl
                             }
                             width={"100%"}
                          />
                       )
                     : props.youtubeUrl && (
                          <S.YouTubeBox
                             url={
                                props.isEdit
                                   ? props.boardData?.fetchBoard.youtubeUrl
                                   : props.youtubeUrl
                             }
                             width={"100%"}
                          />
                       )}
                  <S.TextArea
                     onChange={props.onChangeContents}
                     defaultValue={props.boardData?.fetchBoard.contents}
                     placeholder="말은 사라지지만 글은 남습니다."
                  ></S.TextArea>
               </S.TextAreaWrapper>
            </S.Contents>
            <S.IconWrapper>
               <S.YoutubeInput onClick={props.onClickToYouTubeModal} />
               <S.FileUpload onClick={onClickImage} />
               {props.imageUrl ? (
                  <S.ImagePreview
                     width={200}
                     src={`https://storage.googleapis.com/${props.imageUrl}`}
                  />
               ) : (
                  props.boardData?.fetchBoard.images[0] && (
                     <S.ImagePreview
                        width={200}
                        src={`https://storage.googleapis.com/${props.boardData?.fetchBoard.images[0]}`}
                     />
                  )
               )}
               <S.Zipcode
                  src="/board/write/zipcode.png"
                  onClick={props.onClickToPostModal}
               />
               <S.MyFileInput
                  type="file"
                  ref={fileRef}
                  onChange={props.onChangeFile}
               />
               <S.AddressWrapper>
                  <S.AddressDaumWrapper>
                     <S.AddressZipCode
                        readOnly
                        value={
                           props.zipcode ||
                           props.boardData?.fetchBoard.boardAddress?.zipcode
                        }
                     />
                     <S.Address
                        readOnly
                        value={
                           props.address ||
                           props.boardData?.fetchBoard.boardAddress?.address
                        }
                     />
                  </S.AddressDaumWrapper>
                  <S.AddressInput
                     onChange={props.onChangeAddressDetail}
                     defaultValue={
                        props.addressDetail ||
                        props.boardData?.fetchBoard.boardAddress?.addressDetail
                     }
                  />
               </S.AddressWrapper>
            </S.IconWrapper>
            <S.SubmitButton
               type="primary"
               onClick={props.isEdit ? props.update : props.submit}
               disabled={props.isEdit ? false : props.disabled}
            >
               {props.isEdit ? "수정" : "등록"}하기
            </S.SubmitButton>
         </S.Wrapper>
      </S.Background>
   );
}
