import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./bankSlice";
import todoReducer from "./todoSlice"; // ✅ Make sure the file name is correct

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    todo: todoReducer,
  },
});
