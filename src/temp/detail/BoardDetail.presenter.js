import * as S from './BoardDetail.styles'

export default function BoardDetailUI(props) {
  
    return (
        <S.Background>
            <S.Wrapper__BD>
                <S.Header__BD>
                    <S.Profile__BD>
                        <S.Picture>
                            <img src='/board/detail/profileIcon.png'/>
                        </S.Picture>
                        <S.ProfileInfo__BD>
                            <S.InfoWriter__BD>{props.data ? props.data.fetchBoard.writer : "조금만 기다려주세요..."}</S.InfoWriter__BD>
                            <S.InfoDate__BD>{props.data ? "Date : " + props.data.fetchBoard.createdAt.split("T")[0].replace(/-/gi , "." ) : "조금만 기다려주세요..."}</S.InfoDate__BD>
                        </S.ProfileInfo__BD>
                    </S.Profile__BD>
                    <S.ProfileAddOn__BD>
                        <S.Link__BD>
                            <img src='/board/detail/link.png'/>
                        </S.Link__BD>
                        <img src='/board/detail/location.png'/>
                    </S.ProfileAddOn__BD>
                </S.Header__BD>
                <S.GrayLine></S.GrayLine>
                <S.Body__BD>
                    <S.BodyTitle__BD>{props.data ? props.data.fetchBoard.title : "조금만 기다려주세요..."}</S.BodyTitle__BD>
                    <S.BodyPicture__BD></S.BodyPicture__BD>
                    <S.Textarea__BD>{props.data ? props.data.fetchBoard.contents : "조금만 기다려주세요..."}</S.Textarea__BD>
                </S.Body__BD>
            </S.Wrapper__BD>
            <S.Footer__BD>
                <S.Button_BD onClick={props.onClickToList}>목록으로</S.Button_BD>
                <S.Button_BD onClick={props.onClickEdit}>수정하기</S.Button_BD>
                <S.Button_BD onClick={props.onClickDelete}>삭제하기</S.Button_BD>
            </S.Footer__BD>
        </S.Background>
        
    )

}