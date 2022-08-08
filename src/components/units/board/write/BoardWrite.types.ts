export interface IBoardWriteUI {
   disabled: boolean;
   onChangeName: (event: any) => void;
   onChangePw: (event: any) => void;
   onChangeTitle: (event: any) => void;
   onChangeContents: (event: any) => void;
   onChangeAddressDetail: (event: any) => void;
   onChangeFile: (event: any) => void;
   onClickToYouTubeModal: () => void;
   onClickToPostModal: () => void;
   submit: () => void;
   update: () => void;
   isEdit: boolean;
   boardData?: any;
   errName?: string;
   errPw?: string;
   errTitle?: string;
   errContents?: string;
   writer?: string;
   title?: string;
   youtubeUrl?: string;
   imageUrl?: string;
   zipcode?: string;
   address?: string;
   addressDetail?: string;
}

export interface IBoardWrite {
   isEdit: boolean;
   boardData?: any;
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
      youtubeUrl?: string;
      images?: [string];
   };
}
