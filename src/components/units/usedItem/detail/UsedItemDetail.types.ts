import { SetStateAction, Dispatch } from "react";

export interface IUsedItemDetailUI {
   onClickToList: () => void;
   onClickEdit: () => void;
   setIsModalVisible: Dispatch<SetStateAction<boolean>>;
   setIsBuyingVisible: Dispatch<SetStateAction<boolean>>;
   onClickPickItem: () => void;
   fetchMore: () => void;
   data?: any;
   commentData?: any;
   addressDetail?: string;
   isPicked?: boolean;
}
export interface IPickedItems {
   _id: string;
   writer: string;
   title: string;
}
