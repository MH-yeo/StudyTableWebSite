import { useState } from "react";
import Collapse1UI from "./Collapse1.presenter";

interface IProps {
   title: string;
   context: string;
}

export default function Collapse1(props: IProps) {
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
