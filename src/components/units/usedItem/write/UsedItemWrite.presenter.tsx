import "react-quill/dist/quill.snow.css";
import { Controller } from "react-hook-form";
import dynamic from "next/dynamic";
import ButtonImageUpload01 from "../../../commons/buttons/imageUpload01/ButtonImageUpload01";
import * as S from "./UsedItemWrite.styles";
import styled from "@emotion/styled";
import { useRef } from "react";
import { inputPriceFormat } from "../../../../commons/utilities/inputPriceFormat";

const ReactQuill = dynamic(() => import("react-quill"), {
   ssr: false,
});
const arr = new Array(2).fill(1);
const MyReactQuill = styled(ReactQuill)`
   height: 100%;
   .ql-quill {
      height: 100%;
   }
   .ql-container {
      height: 100%;
   }
   .ql-container.ql-snow {
      height: 258px;
   }
   .ql-editor.ql-blank {
      height: 100%;
   }
`;

export default function UsedItemWriteUI(props) {
   const fileRef = useRef<HTMLInputElement>(null);
   const onClickImage = () => {
      fileRef.current?.click();
   };

   return (
      <S.Background>
         <S.Wrapper>
            <form
               onSubmit={props.handleSubmit(
                  props.isEdit ? props.update : props.submit
               )}
            >
               <S.Header>
                  <S.MainTitle>
                     중고장터 상품 {props.isEdit ? "수정하기" : "등록하기"}
                  </S.MainTitle>
                  <S.HeaderContainer>
                     <S.HeaderName>
                        <S.Mandatory>
                           <S.SubTitle>상품명</S.SubTitle>
                           <S.StarMarkup>*</S.StarMarkup>
                        </S.Mandatory>
                        <S.MyInput
                           {...props.register("name")}
                           placeholder="이름을 적어주세요."
                        ></S.MyInput>
                        <S.ErrorText>{props.errName}</S.ErrorText>
                     </S.HeaderName>
                     <S.HeaderPw>
                        <S.SubTitle>판매가격</S.SubTitle>
                        <Controller
                           name="price"
                           control={props.control}
                           render={({ field: { value } }) => (
                              <S.MyInput
                                 onChange={props.onChangePrice}
                                 value={inputPriceFormat(value)}
                                 placeholder="₩ 가격을 입력해주세요."
                              />
                           )}
                        />
                        <S.ErrorText>{props.errPw}</S.ErrorText>
                     </S.HeaderPw>
                  </S.HeaderContainer>
               </S.Header>
               <S.Account>
                  <S.SubTitle>제목</S.SubTitle>
                  <S.MyInput
                     {...props.register("remarks")}
                     placeholder="제품을 한줄로 설명해주세요."
                  ></S.MyInput>
                  <S.ErrorText>{props.errTitle}</S.ErrorText>
               </S.Account>
               <S.Contents>
                  <S.SubTitle>상품 내용 작성</S.SubTitle>
                  <S.QuillBox>
                     <MyReactQuill
                        placeholder="가품 및 판매금지품목은 게시가 제한될 수 있어요."
                        onChange={props.onChangeContents}
                        defaultValue={
                           props.usedItemData?.fetchUseditem.contents
                        }
                     />
                  </S.QuillBox>
               </S.Contents>
               <S.MiddleWrapper>
                  <S.AddressWrapper>
                     <S.SubTitle>거래 위치 등록</S.SubTitle>
                     <S.AddressInputWrapper>
                        <S.Zipcode
                           src="/board/write/zipcode.png"
                           onClick={props.onClickToPostModal}
                        />
                        <S.AddressContainer>
                           <S.AddressDaumWrapper>
                              <S.AddressZipCode
                                 readOnly
                                 {...props.register("useditemAddress.zipcode")}
                              />
                              <S.Address
                                 readOnly
                                 {...props.register("useditemAddress.address")}
                              />
                           </S.AddressDaumWrapper>
                           <S.AddressInput
                              {...props.register(
                                 "useditemAddress.addressDetail"
                              )}
                              placeholder="상세주소를 입력해주세요."
                           />
                        </S.AddressContainer>
                     </S.AddressInputWrapper>
                  </S.AddressWrapper>
                  <S.ImageWrapper>
                     <S.ImageResetWrapper>
                        <S.SubTitle>사진 첨부</S.SubTitle>
                        <S.ResetButton
                           type="button"
                           onClick={props.onClickReset}
                        >
                           reset
                        </S.ResetButton>
                     </S.ImageResetWrapper>
                     <S.ImageButtonWrapper>
                        {props.imageUrl &&
                           props.imageUrl
                              .map((_, i: number) => (
                                 <S.PreviewBox key={i}>
                                    <S.ImagePreview
                                       onError={({ currentTarget }) => {
                                          currentTarget.onerror = null; // prevents looping
                                          currentTarget.src =
                                             "/useditem/image-default.png";
                                       }}
                                       width={100}
                                       src={`https://storage.googleapis.com/${props.imageUrl[i]}`}
                                    />
                                 </S.PreviewBox>
                              ))
                              .filter((_, i) => i < 2)}
                        {arr
                           .map((_, i: number) => (
                              <ButtonImageUpload01
                                 onClickImage={onClickImage}
                                 key={i}
                              />
                           ))
                           .filter((_, i) => {
                              if (props.imageUrl === undefined) {
                                 return true;
                              } else if (props.imageUrl[i] === "") {
                                 return false;
                              } else if (!props.imageUrl[i]) {
                                 return true;
                              } else return false;
                           })}
                     </S.ImageButtonWrapper>
                  </S.ImageWrapper>
               </S.MiddleWrapper>
               <Controller
                  name="images"
                  control={props.control}
                  render={() => (
                     <S.MyFileInput
                        onChange={props.onChangeFile}
                        ref={fileRef}
                        type="file"
                     />
                  )}
               />
               <S.KakaoNoMap>
                  {!props.address && <S.NoMap src="/useditem/nomap.png" />}
                  <div
                     id="map"
                     style={{
                        width: "100%",
                        height: "400px",
                        borderRadius: "10px",
                     }}
                  />
               </S.KakaoNoMap>
               <S.SubmitButton type="primary" htmlType="submit">
                  {props.isEdit ? "수정" : "등록"}하기
               </S.SubmitButton>
            </form>
         </S.Wrapper>
      </S.Background>
   );
}
