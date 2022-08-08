import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
   mutation createBoardComment(
      $createBoardCommentInput: CreateBoardCommentInput!
      $boardId: ID!
   ) {
      createBoardComment(
         createBoardCommentInput: $createBoardCommentInput
         boardId: $boardId
      ) {
         _id
         writer
         contents
         rating
         createdAt
      }
   }
`;
export const UPDATE_COMMENT = gql`
   mutation updateBoardComment(
      $password: String!
      $boardCommentId: ID!
      $updateBoardCommentInput: UpdateBoardCommentInput!
   ) {
      updateBoardComment(
         password: $password
         boardCommentId: $boardCommentId
         updateBoardCommentInput: $updateBoardCommentInput
      ) {
         _id
         writer
         contents
         rating
         createdAt
      }
   }
`;

export const FETCH_COMMENTS = gql`
   query fetchBoardComments($boardId: ID!) {
      fetchBoardComments(boardId: $boardId) {
         _id
         writer
         contents
         rating
         createdAt
      }
   }
`;
