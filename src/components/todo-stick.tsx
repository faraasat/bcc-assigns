import { FC } from "react";

import { BellOff, Edit, XOctagon } from "react-feather";

import { ITodoStick } from "./types.d";

import "./todo-stick.css";

const TodoStickComponent: FC<ITodoStick> = ({ id, title, active }) => {
  console.log(active)
  return (
    <div className={`${!active ? "todo-inactive" : ""} todo`} id={id}>
      <div className="todo-title">
        <p>{title}</p>
      </div>
      <div className="todo-icons">
        <span className="todo-icons__bell">
          <BellOff />
        </span>
        <span className="todo-icons__edit">
          <Edit />
        </span>
        <span className="todo-icons__del">
          <XOctagon />
        </span>
      </div>
    </div>
  );
};

export default TodoStickComponent;
