import React, { useReducer, useState } from "react";

const initialTodos = [
  {
    id: 1,
    title: "do your homerwork",
    discreption: "vdsvvdfvdvfdvv",
  },
  {
    id: 2,
    title: "do your housework",
    discreption: "vdsvvdfvdvfdvv",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const Reducer = () => {
  const [item, setItem] = useState("");

  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const addTodo = (t) => {
    const isExist = todos.some((t) => t.title === item);
    if (!isExist) {
      dispatch({
        type: "ADD",
        payload: { id: Math.random(), title: item },
      });
    }
  };

  // const deleteTodo = (id) => {
    // dispatch({ type: "DELETE", payload: id });
  // };
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add items
      </button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <p>{todo.title}</p>
              <button
                onClick={() => {
                  dispatch({ type: "DELETE", payload: todo.id });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reducer;
