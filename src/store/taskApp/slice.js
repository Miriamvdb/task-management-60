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
      state.tasks.push({ id: state.tasks.length + 1, ...action.payload });
    },
    checkTask: (state, action) => {
      console.log("Reducer checkTask", action);
      const index = action.payload;
      state.tasks[index].completed = !state.tasks[index].completed;
    },
    deleteTask: (state, action) => {
      console.log("Reducer deleteTask", action);
      const id = action.payload;
      const newArray = state.tasks.filter((task) => task.id !== id);
      state.tasks = newArray;
    },
  },
});

export const { addNewTask, checkTask, deleteTask } = taskAppSlice.actions;
export default taskAppSlice.reducer;
