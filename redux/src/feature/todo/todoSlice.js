import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState={
   todos:[{id:0 , text: "Hello World"}]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: state.todos[state.todos.length - 1].id + 1,

        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos=state.todos.filter((todo) => todo.id !== action.payload);
      console.log(state.todos);
    },
  },
});

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer