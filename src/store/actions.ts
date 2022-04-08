export const deleteAll = () => ({
  type: "DELETE_ALL",
  payload: {},
});

export const addTodo = (id: string, title: string) => ({
  type: "ADD_TODO",
  payload: { id: id, title: title },
});

export const deleteTodo = (id: string, active: boolean) => ({
  type: "DELETE_TODO",
  payload: { id: id, active: active },
});

export const setInactive = (id: string) => ({
  type: "SET_INACTIVE",
  payload: { id: id },
});

export const setActive = (id: string) => ({
  type: "SET_ACTIVE",
  payload: { id: id },
});

export const updateTodo = (id: string, title: string, active: boolean) => ({
  type: "UPDATE_TODO",
  payload: { id: id, title: title, active: active },
});
