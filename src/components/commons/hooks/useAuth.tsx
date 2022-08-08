import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
   accessTokenState,
   restoreAccessTokenLodable,
} from "../../../commons/store";

export function useAuth() {
   const router = useRouter();
   const [accessToken] = useRecoilState(accessTokenState);
   const aaa = useRecoilValueLoadable(restoreAccessTokenLodable);

   useEffect(() => {
      if (!accessToken) {
         aaa.toPromise().then((newAccessToken) => {
            console.log("this is newAcessToken", newAccessToken);
            if (!newAccessToken) {
               alert("로그인 후 이용 가능합니다!!!");
               router.push("/admin/login");
            }
         });
      }
   }, []);
}
