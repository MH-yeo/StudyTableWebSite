import * as S from './BoardWrite.styles'

export default function BoardWriteUI(props) {

return (
        <S.Background>
            <S.Wrapper>
                <S.Header>
                    <S.MainTitle>자유게시판 {props.isEdit ? "수정하기" : "글쓰기"}</S.MainTitle>
                    <S.HeaderContainer>
                        <S.Header__name>
                            <S.Mandatory>
                                <S.SubTitle>작성자</S.SubTitle>
                                <S.Star__markup>*</S.Star__markup>
                            </S.Mandatory>
                            <S.Input onChange={props.onChangeName} placeholder='이름을 적어주세요.'></S.Input>
                            <S.Error__text>{props.errName}</S.Error__text>
                        </S.Header__name>
                        <S.Header__pw>
                            <S.SubTitle>비밀번호</S.SubTitle>
                            <S.Input onChange={props.onChangePw} placeholder='비밀번호를 입력해주세요.'></S.Input>
                            <S.Error__text>{props.errPw}</S.Error__text>
                        </S.Header__pw>
                    </S.HeaderContainer>
                </S.Header>
                <S.Account>
                    <S.Input onChange={props.onChangeTitle} placeholder='제목을 작성해주세요.'></S.Input>
                    <S.Error__text>{props.errTitle}</S.Error__text>
                </S.Account>
                <S.Contents>
                    <S.Textarea onChange={props.onChangeContents} placeholder='내용을 작성해주세요.'></S.Textarea>
                    <S.Error__text>{props.errContents}</S.Error__text>
                </S.Contents>
                <S.Address>
                    <S.SubTitle>주소</S.SubTitle>
                    <S.Address__zipcode>
                        <S.Input__zipcode placeholder='07250'></S.Input__zipcode>
                        <S.Zipcode__serach>우편번호 검색</S.Zipcode__serach>
                    </S.Address__zipcode>
                    <S.Textbox></S.Textbox>
                    <S.Textbox></S.Textbox>
                </S.Address>
                <S.Youtube>
                    <S.SubTitle>유튜브</S.SubTitle>
                    <S.Input placeholder='링크를 복사해주세요.'></S.Input>
                </S.Youtube>
                <S.Attachment>
                    <S.SubTitle>사진첨부</S.SubTitle>
                    <S.Attachment__layer>
                        <S.Graybox>
                            <S.Cross>+</S.Cross>
                            <S.Upload>Upload</S.Upload>
                        </S.Graybox>
                        <S.Graybox>
                            <S.Cross>+</S.Cross>
                            <S.Upload>Upload</S.Upload>
                        </S.Graybox>
                        <S.Graybox>
                            <S.Cross>+</S.Cross>
                            <S.Upload>Upload</S.Upload>
                        </S.Graybox>
                    </S.Attachment__layer>
                </S.Attachment>
                <S.Setting>
                    <S.SubTitle>메인 설정</S.SubTitle>
                    <S.Radio__wrapper>
                        <S.Radio__container>
                            <S.Radio__button type="radio" name="setting"></S.Radio__button>
                            <S.SubTitle>유튜브</S.SubTitle>
                        </S.Radio__container>
                        <S.Radio__container>
                            <S.Radio__button type="radio" name="setting"></S.Radio__button>
                            <S.SubTitle>사진</S.SubTitle>
                        </S.Radio__container>
                    </S.Radio__wrapper>
                </S.Setting>
                <S.Submit>
                    <S.Submit__button onClick={props.submit} disabled={props.disabled}>{props.isEdit ? "수정" : "등록"}하기</S.Submit__button>
                </S.Submit>
            </S.Wrapper>
        </S.Background>
    )
}