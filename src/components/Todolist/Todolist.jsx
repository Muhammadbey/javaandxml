import { useState } from "react";
import Button from "../Button/Button";
import "./todolist.css";

const todosList = [{ id: 1, text: "Do your homework" }];

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(todosList);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (todo.length <= 2) {
      setError("Siz yozgan task 2 harfdan ko'p bo'lishi kerak");
      return;
    }
    const isExist = todos.some((t) => t.text === todo);

    if (isExist) {
      setError("Bu task oldin mavjud");
      return;
    }

    setError("");
    setTodos([...todos, { id: todos.length + 1, text: todo }]);
  };
  const handleRemote = (str) => {
    const updateTodo = todos.filter((todos) => todos.text !== str);
    setTodos(updateTodo);
  };

  return (
    <div className="body">
      <div className="wrapper">
        <input
          className="input"
          type="text"
          placeholder="Enter task.."
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} />
        <p>{error}</p>
        <ol className="list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text}{" "}
              <button
                className="list_btn"
                onClick={() => {
                  handleRemote(todo);
                }}
              >
                remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
