import { FC } from "react";
import { ITodoStick } from "./types.d";

const TodoStickComponent: FC<ITodoStick> = ({ id, title, active }) => {
  return (
    <div>
      <span>{id}</span>
      <span>{title}</span>
      <span>{active}</span>
    </div>
  );
};

export default TodoStickComponent;
