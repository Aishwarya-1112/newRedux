import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [], index: 0 },
  reducers: {
    addTodo: (state, action) => {
      state.index += 1;
      state.todos.push({
        id: state.index,
        text: action.payload.text,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
