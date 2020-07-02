import { createStore } from "redux";

const initialState = { todos: [] };
const store = createStore(todosReducer);

function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log("gatito");
      return [...state, { title: action.title }];
    default:
      state;
  }
}

function addTodo(title) {
  return {
    type: "ADD_TODO",
    title: title,
  };
}

store.dispatch(addTodo("hola caracola"));
console.log(store.getState());
