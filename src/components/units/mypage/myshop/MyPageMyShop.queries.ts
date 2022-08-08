import { gql } from "@apollo/client";

export const FETCH_USEDITEM_IPICKED = gql`
   query fetchUseditemsIPicked($page: Int, $search: String) {
      fetchUseditemsIPicked(page: $page, search: $search) {
         _id
         name
         remarks
         price
         soldAt
         buyer {
            _id
            email
            name
         }
         seller {
            _id
            email
            name
         }
         createdAt
         deletedAt
      }
   }
`;
export const FETCH_USEDITEM_ISOLD = gql`
   query fetchUseditemsISold($page: Int, $search: String) {
      fetchUseditemsISold(page: $page, search: $search) {
         _id
         name
         remarks
         price
         soldAt
         buyer {
            _id
            email
            name
         }
         seller {
            _id
            email
            name
         }
         createdAt
         deletedAt
      }
   }
`;
export const FETCH_COUNTS_IPICKED = gql`
   query fetchUseditemsCountIPicked {
      fetchUseditemsCountIPicked
   }
`;
export const FETCH_COUNTS_ISOLD = gql`
   query fetchUseditemsCountISold {
      fetchUseditemsCountISold
   }
`;
