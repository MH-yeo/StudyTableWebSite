export interface IUsedItemWrite {
   isEdit: boolean;
   boardData?: any;
   usedItemData?: any;
}

export interface IMyvariables {
   boardId?: string | string[];
   password?: string;
   updateBoardInput: {
      contents?: string;
      title?: string;
      boardAddress?: {
         zipcode?: String;
         address?: String;
         addressDetail?: String;
      };
   };
}
