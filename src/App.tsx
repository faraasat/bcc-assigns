import { useState } from "react";

import ActiveTodoComponent from "./components/active-todos";
import InactiveTodoComponent from "./components/inactive-todos";

import "./App.css";

function App() {
  const [active, setActive] = useState(true);

  return (
    <div className="app">
      <nav className="app-nav">
        <div className="app-nav__align">
          <h1>Todo App</h1>
        </div>
      </nav>
      <main className="app-main">
        <div className="app-main__align">
          <button
            className={`${!active && "app-main__button-blue"}`}
            onClick={() => setActive(!active)}
          >
            {active ? "Show Inactive Todos" : "Show Active Todos"}
          </button>
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
    </div>
  );
}

export default App;
