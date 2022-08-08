import { useState } from "react";
import Collapse1UI from "./Collapse1.presenter";

export default function Collapse1(props) {
   const [toggle, setToggle] = useState(false);

   const onClickSetToggle = () => {
      setToggle((prev) => !prev);
   };

   return (
      <Collapse1UI
         toggle={toggle}
         onClickSetToggle={onClickSetToggle}
         title={props.title}
         context={props.context}
      />
   );
}
