import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation(props) {
   const router = useRouter();
   const [accessToken] = useRecoilState(accessTokenState);

   const onClickToHome = () => {
      router.push("/");
   };
   const onClickToPricing = () => {
      router.push("/pricing");
   };
   const onClickToAdminLogin = () => {
      router.push("/admin/login");
   };
   const onClickFormButton = () => {
      router.push("/#form");
   };
   const onClickToCommunity = () => {
      router.push("/useditems/list");
   };
   const onClickToMyPage = () => {
      router.push("/mypage/myshop");
   };

   return (
      <LayoutNavigationUI
         onClickToHome={onClickToHome}
         onClickToPricing={onClickToPricing}
         onClickToAdminLogin={onClickToAdminLogin}
         onClickFormButton={onClickFormButton}
         onClickToCommunity={onClickToCommunity}
         onClickToMyPage={onClickToMyPage}
         navColor={props.navColor}
         accessToken={accessToken}
      />
   );
}
