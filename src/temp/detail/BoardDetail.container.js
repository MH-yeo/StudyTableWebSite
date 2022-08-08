import { useQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardDetailUI from './BoardDetail.presenter'
import { FETCH_BOARD , DELETE_BOARD } from './BoardDetail.queries'

export default function BoardDetail() {
    const router = useRouter()
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const { data } = useQuery(FETCH_BOARD, {
        variables : { boardId: router.query.number }
    })

    const onClickDelete = async () => {
        const result = await deleteBoard({
            variables: { boardId : router.query.number}})
            alert("삭제되었습니다.")
    }

    const onClickToList = () => {
        router.push(`/boards/list`)
    }
    const onClickEdit = () => {
        router.push(`/routed/${router.query.number}/edit`)
    }

        
        // console.log(result)
           
    
    console.log(router)
    console.log(data)

    return <BoardDetailUI
            data={data}
            onClickDelete={onClickDelete}
            onClickToList={onClickToList}
            onClickEdit={onClickEdit}/>
}