import { gql } from "@apollo/client";

export const CREATE_USEDITEM = gql`
   mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
      createUseditem(createUseditemInput: $createUseditemInput) {
         _id
         name
         remarks
         contents
         price
         images
      }
   }
`;

export const UPDATE_USEDITEM = gql`
   mutation updateUseditem(
      $updateUseditemInput: UpdateUseditemInput!
      $useditemId: ID!
   ) {
      updateUseditem(
         updateUseditemInput: $updateUseditemInput
         useditemId: $useditemId
      ) {
         _id
         name
         remarks
         contents
         price
         tags
         images
         pickedCount
         useditemAddress {
            zipcode
            address
            addressDetail
         }
      }
   }
`;

export const UPLOAD_FILE = gql`
   mutation uploadFile($file: Upload!) {
      uploadFile(file: $file) {
         _id
         url
      }
   }
`;
