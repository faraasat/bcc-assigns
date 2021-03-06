import { useDispatch } from "react-redux";
import { useState } from "react";
import { FilePlus, Trash2 } from "react-feather";

import ActiveTodoComponent from "./components/active-todos";
import InactiveTodoComponent from "./components/inactive-todos";
import InputComponent from "./components/input";
import { addTodo, deleteAll } from "./store/actions";

import "./App.css";

function App() {
  const [active, setActive] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <nav className="app-nav">
        <div className="app-nav__align">
          <h1>Todo App</h1>
        </div>
      </nav>
      <main className="app-main">
        <div className="app-main__align">
          <div className="app-main__btns">
            <div>
              <button
                className={`${
                  !active ? "app-main__button-blue" : "app-main__button-orange"
                }`}
                onClick={() => setActive(!active)}
              >
                {active ? "Show Inactive Todos" : "Show Active Todos"}
              </button>
            </div>
            <div>
              <button
                className="app-main__add-btn"
                onClick={() => setIsEdit(!isEdit)}
              >
                <FilePlus /> <span>Add Todo</span>
              </button>
              <button
                className="app-main__del-btn"
                onClick={() => dispatch(deleteAll())}
              >
                <Trash2 /> <span>Delete All</span>
              </button>
            </div>
          </div>
          <div className="app-main__todos">
            {active ? <ActiveTodoComponent /> : <InactiveTodoComponent />}
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <div className="app-footer__align">
          <p>Copyright &copy; 2021 by Todo App. All Rights Reserved.</p>
        </div>
      </footer>
      {isEdit && <div className="overlay"></div>}
      {isEdit && (
        <InputComponent setIsEdit={setIsEdit} setTodo={addTodo} id={null} />
      )}
    </div>
  );
}

export default App;
