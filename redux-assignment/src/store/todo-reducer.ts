import { IReducerAction, IReducerState, ITodos } from "./store.d";

const initialState: IReducerState = {
  activeTodos: [],
  inactiveTodos: [],
};

const todoReducer = (state = initialState, action: IReducerAction) => {
  switch (action.type) {
    case "DELETE_ALL": {
      return {
        activeTodos: [],
        inactiveTodos: [],
      };
    }
    case "ADD_TODO": {
      const obj: ITodos = {
        id: action.payload.id,
        title: action.payload.title,
        active: true,
      };
      const activeTodos = state.activeTodos as any;
      activeTodos.push(obj);
      return { ...state, activeTodos };
    }
    case "DELETE_TODO": {
      if (action.payload.active) {
        const updatedState = state.activeTodos.filter(
          (todo: ITodos) => todo.id !== action.payload.id
        );
        return { ...state, activeTodos: updatedState };
      } else {
        const updatedState = state.inactiveTodos.filter(
          (todo: ITodos) => todo.id !== action.payload.id
        );
        return { ...state, inactiveTodos: updatedState };
      }
    }
    case "UPDATE_TODO": {
      if (action.payload.active) {
        const filteredActive = state.activeTodos.map((todo: ITodos) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            return todo;
          }
          return todo;
        });
        return { ...state, activeTodos: filteredActive };
      } else {
        const filteredActive = state.inactiveTodos.map((todo: ITodos) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            return todo;
          }
          return todo;
        });
        return { ...state, inactiveTodos: filteredActive };
      }
    }
    case "SET_INACTIVE": {
      const elemToMove = state.activeTodos.find(
        (x) => x.id === action.payload.id
      );
      elemToMove!.active = false;
      const inactiveTodos = state.inactiveTodos as any;
      inactiveTodos.push(elemToMove);
      const filteredActive = state.activeTodos.filter(
        (todo: ITodos) => todo.id !== action.payload.id
      );
      return { ...state, activeTodos: filteredActive, inactiveTodos };
    }
    case "SET_ACTIVE": {
      const elemToMove = state.inactiveTodos.find(
        (x) => x.id === action.payload.id
      );
      elemToMove!.active = true;
      const activeTodos = state.activeTodos as any;
      activeTodos.push(elemToMove);
      const filteredInactive = state.inactiveTodos.filter(
        (todo: ITodos) => todo.id !== action.payload.id
      );
      return { ...state, inactiveTodos: filteredInactive, activeTodos };
    }
    default:
      return state;
  }
};

export default todoReducer;
