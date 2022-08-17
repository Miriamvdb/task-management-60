// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../store/taskApp/selectors";
import { checkTask, deleteTask } from "../store/taskApp/slice";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { TiTimes } from "react-icons/ti";
import { CgSmile } from "react-icons/cg";
import "./TaskList.css";

const TaskList = () => {
  const allTasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();

  return (
    <div className="container-tasklist">
      <h2>All tasks</h2>
      {allTasks.length !== 0 ? (
        allTasks.map((task, index) => {
          return (
            <p key={index}>
              <button
                className="button-checkbox"
                onClick={() => dispatch(checkTask(index))}
              >
                {task.completed ? (
                  <RiCheckboxCircleFill style={{ color: "green" }} />
                ) : (
                  <RiCheckboxBlankCircleFill
                    style={{ color: "green", opacity: "25%" }}
                  />
                )}
              </button>
              {task.task}
              <button
                className="button-delete-task"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                <TiTimes />
              </button>
            </p>
          );
        })
      ) : (
        <p>
          No tasks to do! <CgSmile style={{ paddingLeft: "0.5rem" }} />
        </p>
      )}
      <p>
        <b>Total: {allTasks.length}</b>
      </p>
    </div>
  );
};

export default TaskList;
