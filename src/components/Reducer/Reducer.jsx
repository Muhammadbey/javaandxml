import React, { useReducer } from "react";

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
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  console.log(todos);
  return (
    <>
      <input type="text"  />
      <button
        onClick={() => {
          dispatch({
            type: "ADD",
            payload: { id: Math.random(), title: "ascacac" },
          });
        }}
      >
        Add items
      </button>
    </>
  );
};

export default Reducer;
