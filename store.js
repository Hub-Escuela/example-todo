import { createStore } from "redux";

const initialState = { todos: [], completeTodos: [] };
const store = createStore(todosReducer);

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      //console.log("gatito");
      return {
        ...state,
        todos: [...state.todos, { title: action.title, complete: false }],
      };

    case "DELETE_TODO":
      return state.todos.filter((value, index) => {
        if (index !== action.index) {
          return value;
        }
      });
    case "DELETE_LAST_TODO":
      const lastIndex = state.todos.length - 1;

      return state.todos.filter((value, index) => {
        if (index !== lastIndex) {
          return value;
        }
      });

    case "MODIFY_TODO":
      return state.todos.filter((value, index) => {
        if (index === action.index) {
          value.title = action.title;
          return value;
        }
        return value;
      });

    case "SORT_TODOS":
      return [
        ...state.todos.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }

          if (a.title < b.title) {
            return -1;
          }
          return 0;
        }),
      ];

    case "CLEAR_ALL_TODOS":
      return (state.todos = []);

    case "COMPLETE_AND_MOVE_TODO":
      const todoToMove = state.todos.find((value, index) => {
        if (index === action.index) {
          value.complete = true;
          return value;
        }
      });

      const pendingTodos = state.todos.filter((value, index) => {
        if (index !== action.index) {
          return value;
        }
      });

      return {
        ...state,
        todos: [...pendingTodos],
        completeTodos: [...state.completeTodos, todoToMove],
      };

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
    index: index,
  };
}

function deleteLastTodo() {
  return {
    type: "DELETE_LAST_TODO",
  };
}

function modifyTodo(title, index) {
  return {
    type: "MODIFY_TODO",
    title: title,
    index: index,
  };
}

function sortTodos() {
  return {
    type: "SORT_TODOS",
  };
}

function clearAllTodos() {
  return {
    type: "CLEAR_ALL_TODOS",
  };
}

function completeAndMoveTodo(index) {
  return {
    type: "COMPLETE_AND_MOVE_TODO",
    index: index,
  };
}

store.dispatch(addTodo("hola caracola"));
store.dispatch(addTodo("hola1"));
store.dispatch(addTodo("hola2"));
store.dispatch(addTodo("hola3"));
store.dispatch(addTodo("hola4 "));
store.dispatch(addTodo("hola5 "));
// store.dispatch(deleteTodo(1));
// store.dispatch(deleteLastTodo());
// store.dispatch(modifyTodo("adiós", 3));
//store.dispatch(sortTodos());
store.dispatch(completeAndMoveTodo(1));
//store.dispatch(clearAllTodos());

console.log(store.getState());
