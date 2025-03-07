import initialState from "./data/data"
import Todo from './components/Todo'
import { useReducer, useState } from "react";
import './App.css'

//reducer
function todosReducer(state, action) {
  console.log(action);
  // return state;

  switch (action.type) {
    case "add_todo": {
      const newTodo = {
        title: action.payload,
        completed: false,
        id: state.length + 1,
        userId: 1,
      };
      return [newTodo, ...state];
    }
    case "toggle_todo":
      return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);

    case "edit_todo":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
      );

    case "delete_todo":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, dispatch] = useReducer(todosReducer, initialState)
  // console.log(todos);

  const handleClick = () => {
    dispatch({ type: "add_todo", payload: newTodo })
  }

  return (
    <>
   
      <h1
      className="toDoListTitle"
      >To Do List</h1>

      <input
        className="inputField"
        type="text"
        placeholder="Add to do"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button
        className="addButton"
        onClick={handleClick}>Add</button>

      {/* {todos.map(t => <Todo todo={t} key={t.id} dispatch={dispatch} />)} */}
      {todos.map(t => <Todo key={t.id} dispatch={dispatch} {...t} />)}

      {/* or destructure like this */}
      {/* {todos.map(t => <Todo todo={...t} key={t.id} />)} */}
      {/* <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo /> */}
    </>
  )
}

export default App
