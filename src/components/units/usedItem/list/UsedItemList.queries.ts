import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
   query fetchUseditems($page: Int, $search: String, $isSoldout: Boolean) {
      fetchUseditems(page: $page, search: $search, isSoldout: $isSoldout) {
         _id
         name
         remarks
         contents
         price
         tags
         images
         pickedCount
         seller {
            email
            name
         }
         useditemAddress {
            _id
            zipcode
            address
            addressDetail
         }
         soldAt
         createdAt
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
