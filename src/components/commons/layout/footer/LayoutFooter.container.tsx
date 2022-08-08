import { useRouter } from "next/router";
import LayoutFooterUI from "./LayoutFooter.presenter";

export default function LayoutFooter() {
   const router = useRouter();

   const onClickToPrivacyPolicy = () => {
      router.push("/info/privacy.policy.html");
   };

   return <LayoutFooterUI onClickToPrivacyPolicy={onClickToPrivacyPolicy} />;
}
