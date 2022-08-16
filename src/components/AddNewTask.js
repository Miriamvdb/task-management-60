import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../store/taskApp/slice";
import "./AddNewTask.css";

const AddNewTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitTask = (event) => {
    event.preventDefault();
    console.log("New task: ", task);

    dispatch(addNewTask({ task, completed: false }));

    setTask("");
  };

  return (
    <div className="container-addnewtask">
      <form onSubmit={submitTask}>
        <h2>Add a new task</h2>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Task to do"
        />
        <button type="submit">Add new task</button>
      </form>
    </div>
  );
};

export default AddNewTask;
