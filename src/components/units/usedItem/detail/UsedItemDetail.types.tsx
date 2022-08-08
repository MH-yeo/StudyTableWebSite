export interface IBoardDetailUI {
   onClickDelete: () => void;
   onClickToList: () => void;
   onClickEdit: () => void;
   onClickLike: () => void;
   onClickDisLike: () => void;
   data?: any;
   commentData?: any;
}

export interface IPickedItems {
   _id: string;
   writer: string;
   title: string;
}
