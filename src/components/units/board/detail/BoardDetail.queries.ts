import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
   query fetchBoard($boardId: ID!) {
      fetchBoard(boardId: $boardId) {
         writer
         title
         contents
         createdAt
         likeCount
         dislikeCount
         youtubeUrl
         images
         boardAddress {
            zipcode
            address
            addressDetail
         }
      }
   }
`;

export const DELETE_BOARD = gql`
   mutation deleteBoard($boardId: ID!) {
      deleteBoard(boardId: $boardId)
   }
`;

export const DELETE_COMMENT = gql`
   mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
      deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
   }
`;

export const LIKE_BOARD = gql`
   mutation likeBoard($boardId: ID!) {
      likeBoard(boardId: $boardId)
   }
`;

export const DISLIKE_BOARD = gql`
   mutation dislikeBoard($boardId: ID!) {
      dislikeBoard(boardId: $boardId)
   }
`;

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
   mutation updateBoardCommentInput(
      $password: String!
      $boardCommentId: ID!
      $updateBoardCommentInput: UpdateBoardCommentInput!
   ) {
      updateBoardCommentInput(
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
   query fetchBoardComments($boardId: ID!, $page: Int) {
      fetchBoardComments(boardId: $boardId, page: $page) {
         _id
         writer
         contents
         rating
         createdAt
      }
   }
`;
