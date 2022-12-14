import { gql } from "@apollo/client";

export const FETCH_USER_LOGGEDIN = gql`
   query fetchUserLoggedIn {
      fetchUserLoggedIn {
         _id
         email
         name
         picture
         userPoint {
            _id
            amount
         }
      }
   }
`;
export const FETCH_USER_LOGOUT = gql`
   mutation logoutUser {
      logoutUser
   }
`;
export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
   mutation createPointTransactionOfLoading($impUid: ID!) {
      createPointTransactionOfLoading(impUid: $impUid) {
         _id
         impUid
         amount
         balance
         status
      }
   }
`;
