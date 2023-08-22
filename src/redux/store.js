import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/book/bookSlice";
import categoriesReducer from "./categories/categoriesSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
