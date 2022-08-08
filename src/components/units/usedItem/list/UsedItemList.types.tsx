export interface IUsedItemListUI {
   onClickToDetail: (event: any) => void;
   onClickWrite: () => void;
   data?: any;
}

export interface IClickedItems {
   _id: string;
   writer: string;
   title: string;
}
