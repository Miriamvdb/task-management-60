import { configureStore } from "@reduxjs/toolkit";
import taskAppReducer from "./taskApp/slice";

const store = configureStore({
  reducer: {
    taskApp: taskAppReducer,
  },
});

export default store;
