import { gql } from "@apollo/client"

export const CREATE_PRODUCT = gql`
mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
    _id
    writer
    title
    contents
    }
}
`