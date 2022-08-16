import { useSelector } from "react-redux";
import { selectAllTasks } from "../store/taskApp/selectors";
import "./TaskList.css";

const TaskList = () => {
  const allTasks = useSelector(selectAllTasks);

  return (
    <div className="container-tasklist">
      <h2>All tasks</h2>
      <p>
        <b>Total: {allTasks.length}</b>
      </p>
      {allTasks.map((task) => {
        return (
          <p key={task.id}>
            <input
              type="checkbox"
              // checked={task.completed ? true : false}
            />
            {task.task}
          </p>
        );
      })}
    </div>
  );
};

export default TaskList;
