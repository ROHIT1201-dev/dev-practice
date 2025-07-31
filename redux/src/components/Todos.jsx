import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <>
      <div>Todos</div>
      <ul>
        
        {todos.map((todo) => {
          return(
          
          <li key={todo.id}>
            {todo.text}

            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>)
        })}
      </ul>
    </>
  );
}

export default Todos;
