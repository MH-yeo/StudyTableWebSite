import { gql } from "@apollo/client";

export const DELETE_QUESTION = gql`
   mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
      deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
   }
`;
export const DELETE_QUESTION_ANSWER = gql`
   mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
      deleteUseditemQuestionAnswer(
         useditemQuestionAnswerId: $useditemQuestionAnswerId
      )
   }
`;

export const FETCH_QUESTION_ANSWERS = gql`
   query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
      fetchUseditemQuestionAnswers(
         page: $page
         useditemQuestionId: $useditemQuestionId
      ) {
         _id
         contents
         user {
            name
         }
         createdAt
      }
   }
`;
