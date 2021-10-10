import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import ListItem from "./components/ListItem";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function inputHandler(enteredText) {
    setInputTodo(enteredText);
  }

  function addTodo() {
    setTodoList((prevTodoList) => [inputTodo, ...prevTodoList]);
    setInputTodo("");
  }

  function deleteTodo(id) {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo, index) => index !== id)
    );
  }

  return (
    <div className="mainDiv">
      <h1 className="h1">To-do List</h1>
      <Input onInput={inputHandler} onAdd={addTodo} value={inputTodo} />
      <ul className="items">
        {todoList.map((todo, index) => (
          <ListItem item={todo} key={index} id={index} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
