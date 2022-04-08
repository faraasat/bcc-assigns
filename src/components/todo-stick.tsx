import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { BellOff, Bell, Edit, XOctagon } from "react-feather";

import {
  deleteTodo,
  setActive,
  setInactive,
  updateTodo,
} from "./../store/actions";
import InputComponent from "./input";

import { ITodoStick } from "./types.d";

import "./todo-stick.css";

const TodoStickComponent: FC<ITodoStick> = ({ id, title, active }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={`${!active ? "todo-inactive" : ""} todo`} id={id}>
      <div className="todo-title">
        <p>{title}</p>
      </div>
      <div className="todo-icons">
        <span className="todo-icons__bell">
          {active ? (
            <BellOff onClick={() => dispatch(setInactive(id))} />
          ) : (
            <Bell onClick={() => dispatch(setActive(id))} />
          )}
        </span>
        <span className="todo-icons__edit" onClick={() => setIsEdit(true)}>
          <Edit />
        </span>
        <span
          className="todo-icons__del"
          onClick={() => dispatch(deleteTodo(id, active))}
        >
          <XOctagon />
        </span>
      </div>
      {isEdit && <div className="overlay"></div>}
      {isEdit && (
        <InputComponent
          setIsEdit={setIsEdit}
          setTodo={updateTodo}
          title={title}
          id={id}
          active={active}
        />
      )}
    </div>
  );
};

export default TodoStickComponent;
