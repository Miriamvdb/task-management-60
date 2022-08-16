// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../store/taskApp/selectors";
import { checkTask } from "../store/taskApp/slice";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import "./TaskList.css";

const TaskList = () => {
  const allTasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();

  return (
    <div className="container-tasklist">
      <h2>All tasks</h2>
      {allTasks.map((task, index) => {
        return (
          <p key={index}>
            <button
              className="button-checkbox"
              onClick={() => dispatch(checkTask(index))}
            >
              {task.completed ? (
                <RiCheckboxBlankCircleFill
                  style={{ color: "green", opacity: "25%" }}
                />
              ) : (
                <RiCheckboxCircleFill style={{ color: "green" }} />
              )}
            </button>
            {task.task}
          </p>
        );
      })}
      <p>
        <b>Total: {allTasks.length}</b>
      </p>
    </div>
  );
};

export default TaskList;
