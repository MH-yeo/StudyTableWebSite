import { gql } from "@apollo/client";

export const CREATE_QUESTION = gql`
   mutation createUseditemQuestion(
      $createUseditemQuestionInput: CreateUseditemQuestionInput!
      $useditemId: ID!
   ) {
      createUseditemQuestion(
         createUseditemQuestionInput: $createUseditemQuestionInput
         useditemId: $useditemId
      ) {
         _id
         contents
         user {
            name
         }
      }
   }
`;
export const CREATE_QUESTION_ANSWER = gql`
   mutation createUseditemQuestionAnswer(
      $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
      $useditemQuestionId: ID!
   ) {
      createUseditemQuestionAnswer(
         createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
         useditemQuestionId: $useditemQuestionId
      ) {
         _id
         contents
      }
   }
`;
export const UPDATE_QUESTION = gql`
   mutation updateUseditemQuestion(
      $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
      $useditemQuestionId: ID!
   ) {
      updateUseditemQuestion(
         updateUseditemQuestionInput: $updateUseditemQuestionInput
         useditemQuestionId: $useditemQuestionId
      ) {
         _id
      }
   }
`;
export const UPDATE_QUESTION_ANSWER = gql`
   mutation updateUseditemQuestionAnswer(
      $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
      $useditemQuestionAnswerId: ID!
   ) {
      updateUseditemQuestionAnswer(
         updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
         useditemQuestionAnswerId: $useditemQuestionAnswerId
      ) {
         _id
      }
   }
`;
export const FETCH_QUESTIONS = gql`
   query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
      fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
         _id
         contents
         user {
            name
         }
         createdAt
      }
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
