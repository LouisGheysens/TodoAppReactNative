import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter((e) => e.id !== id);
    },
  },
});

export const { actions, reducer } = todoSlice;
export const { addTodo, removeTodo } = actions;
