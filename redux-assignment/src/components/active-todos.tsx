import { useSelector } from "react-redux";

import { RootStateType } from "../store/root-reducer";
import TodoStickComponent from "./todo-stick";
import { Meh } from "react-feather";

import { ITodoStick } from "./types.d";

import "./todos.css";

const ActiveTodoComponent = () => {
  const activeTodos = useSelector(
    (state: RootStateType) => state.todoReducer.activeTodos
  );
  return (
    <div>
      {activeTodos && activeTodos.length > 0 ? (
        activeTodos.map((todo: ITodoStick) => (
          <TodoStickComponent key={todo.id} {...todo} />
        ))
      ) : (
        <div className="no-todos">
          <Meh size={45} />{" "}
          <span>Oooops! No Todo Found, Click "Add Todo" to Add One.</span>
        </div>
      )}
    </div>
  );
};

export default ActiveTodoComponent;
