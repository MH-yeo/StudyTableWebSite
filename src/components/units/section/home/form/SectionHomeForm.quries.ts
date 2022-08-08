import { gql } from "@apollo/client";
export const SUBMIT_FORM = gql`
   mutation submitForm($createBoardInput: CreateBoardInput!) {
      createBoard(createBoardInput: $createBoardInput) {
         _id
      }
   }
`;
