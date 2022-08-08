import { ChangeEvent } from "react";

export interface IBoardListUI {
   onClickToDetail: (event: any) => void;
   onClickWrite: () => void;
   refetch: () => void;
   onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
   data?: any;
   boardCounts?: number;
   keyword?: string;
}
