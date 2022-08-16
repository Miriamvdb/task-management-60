import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxTasks: 20,
  tasks: [
    { id: 1, task: "Pick up new glasses", completed: true },
    { id: 2, task: "Buy airco", completed: false },
    { id: 3, task: "Take packages to return", completed: false },
    { id: 4, task: "Order dog food", completed: true },
  ],
  showCompletedTasks: false,
};

export const taskAppSlice = createSlice({
  name: "taskApp",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      console.log("Reducer addNewTask", action);
      state.tasks.push({ ...action.payload, id: state.tasks.length + 1 });
    },
  },
});

export const { addNewTask } = taskAppSlice.actions;
export default taskAppSlice.reducer;
