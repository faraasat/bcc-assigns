import { Dispatch, SetStateAction } from "react";

export interface ITodoStick {
  id: string;
  title: string;
  active: boolean;
}

export interface IInput {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setTodo: any;
  id: string | null;
  active?: boolean;
  title?: string;
}
