export interface IReducerState {
  activeTodos: Array<ITodos> | [];
  inactiveTodos: Array<ITodos> | [];
}

export interface ITodos {
  id: string;
  title: string;
  active: boolean;
}

export interface IReducerAction {
  type;
  string;
  payload?: any;
}
