import { useSelector } from "react-redux";
import { selectAllTasks } from "../store/taskApp/selectors";
import "./TaskApp.css";

const TaskApp = () => {
  const allTasks = useSelector(selectAllTasks);
  console.log(allTasks);

  return (
    <div className="container-taskapp">
      <h2>All tasks</h2>
      {allTasks.map((task) => {
        return <p key={task.id}>{task.task}</p>;
      })}
    </div>
  );
};

export default TaskApp;
