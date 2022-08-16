import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks, selectMaxTasks } from "../store/taskApp/selectors";
import { addNewTask } from "../store/taskApp/slice";
import "./AddNewTask.css";

const AddNewTask = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const allTasks = useSelector(selectAllTasks);
  const maxTasks = useSelector(selectMaxTasks);

  console.log(maxTasks);
  console.log(allTasks.length);

  const submitTask = (event) => {
    event.preventDefault();
    console.log("New task: ", task);

    dispatch(addNewTask({ task, completed: false }));

    setTask("");
  };

  return (
    <div className="container-addnewtask">
      {allTasks.length < maxTasks ? (
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
      ) : (
        <p>It's not possible to add more tasks</p>
      )}
    </div>
  );
};

export default AddNewTask;
