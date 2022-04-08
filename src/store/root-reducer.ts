import { combineReducers } from "redux";

import todoReducer from "./todo-reducer";

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
