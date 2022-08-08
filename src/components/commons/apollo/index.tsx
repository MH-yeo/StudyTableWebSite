import {
   ApolloClient,
   ApolloLink,
   ApolloProvider,
   InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
   accessTokenState,
   restoreAccessTokenLodable,
} from "../../../commons/store";
import getAccessToken from "../../../commons/utilities/getAccessToken";

export default function ApolloSetting(props) {
   const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
   const aaa = useRecoilValueLoadable(restoreAccessTokenLodable);

   // useEffect(() => {
   //    getAccessToken().then((newAccessToken) => {
   //       setAccessToken(newAccessToken);
   //    });
   // }, []);
   useEffect(() => {
      aaa.toPromise().then((newAccessToken) => {
         setAccessToken(newAccessToken);
      });
   }, []);

   const errorLink = onError(({ graphQLErrors, operation, forward }) => {
      // 1-1. 에러를 캐치
      if (graphQLErrors) {
         for (const err of graphQLErrors) {
            // 1-2. 해당 에러가 토큰만료 에러인지 체크
            if (err.extensions.code === "UNAUTHENTICATED") {
               // 2-1. refreshToken 으로 accessToken 재발급 받기
               getAccessToken().then((newAccessToken) => {
                  // 2-2. 재발급 받은 accessToken 저장하기
                  setAccessToken(newAccessToken);

                  // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청
                  operation.setContext({
                     headers: {
                        ...operation.getContext().headers,
                        Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꾸기
                     },
                  });
                  // 3-2. 변경된 operation 재요청하기!!!
                  return forward(operation);
               });
            }
         }
      }
   });
   const uploadLink = createUploadLink({
      uri: "https://backend07.codebootcamp.co.kr/graphql",
      headers: { Authorization: `Bearer ${accessToken}` },
      credentials: "include",
   });

   const client = new ApolloClient({
      link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
      cache: new InMemoryCache(),
   });

   return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
