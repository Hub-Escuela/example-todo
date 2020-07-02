import { createStore } from "redux";

const initialState = { todos: [] };
const store = createStore(todosReducer);

function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log("gatito");
      return [...state, { title: action.title }];
    case "DELETE_TODO":
      state.filter((value, index) => {
        if (index !== action.index) {
          return value;
        }
      });
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

function deleteTodo(index) {
  return {
    type: "DELETE_TODO",
    index,
  };
}

store.dispatch(addTodo("hola caracola"));
store.dispatch(addTodo("hola1"));
store.dispatch(addTodo("hola2"));
store.dispatch(addTodo("hola3 "));
store.dispatch(deleteTodo(1));
console.log(store.getState());
