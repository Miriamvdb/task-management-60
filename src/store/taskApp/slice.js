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
  name: "balance",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer
// function as we add cases to our reducer we will also
// export the corresponding actions
export const {} = taskAppSlice.actions;
export default taskAppSlice.reducer;
