import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import UsedItemWrite from "../../../src/components/units/usedItem/write/UsedItemWrite.container";

export default function UsedItemWritePage() {
   useAuth();

   return <UsedItemWrite isEdit={false} />;
}
