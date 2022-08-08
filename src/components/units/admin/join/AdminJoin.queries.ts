import { gql } from "@apollo/client";
export const CREATE_USER = gql`
   mutation submitForm($createUserInput: CreateUserInput!) {
      createUser(createUserInput: $createUserInput) {
         _id
      }
   }
`;
