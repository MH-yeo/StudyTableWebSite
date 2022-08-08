import { gql } from "@apollo/client";

export const FETCH_USEDITEM = gql`
   query fetchUseditem($useditemId: ID!) {
      fetchUseditem(useditemId: $useditemId) {
         _id
         name
         remarks
         contents
         price
         tags
         images
         createdAt
         pickedCount
         useditemAddress {
            zipcode
            address
            addressDetail
         }
         seller {
            name
            picture
         }
         buyer {
            name
            picture
         }
         soldAt
         createdAt
      }
   }
`;
export const FETCH_USEDITEM_IPICKED = gql`
   query fetchUseditemsIPicked($search: String, $page: Int) {
      fetchUseditemsIPicked(search: $search, page: $page) {
         _id
         deletedAt
      }
   }
`;

export const DELETE_USEDITEM = gql`
   mutation deleteUseditem($useditemId: ID!) {
      deleteUseditem(useditemId: $useditemId)
   }
`;
export const PICK_USEDITEM = gql`
   mutation toggleUseditemPick($useditemId: ID!) {
      toggleUseditemPick(useditemId: $useditemId)
   }
`;
export const POINT_BUYING = gql`
   mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
      createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
         _id
         name
         remarks
      }
   }
`;
