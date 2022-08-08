export interface IClickedItems {
   _id: string;
   writer: string;
   title: string;
   todayDate: string;
}

export interface IUsedItemListUI {
   onClickToDetail: (event: any) => () => void;
   onClickToWrite: () => void;
   data?: any;
   clickedItems?: IClickedItems[];
   keyword?: string;
   loadFunc: () => void;
}
