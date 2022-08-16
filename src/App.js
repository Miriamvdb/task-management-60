import "./App.css";
import AddNewTask from "./components/AddNewTask";
import TaskList from "./components/TaskList";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "green", paddingLeft: "2.5rem", fontSize: 40 }}>
        Task Management{" "}
        <MdOutlinePlaylistAddCheck style={{ paddingLeft: "0.5rem" }} />
      </h1>
      <TaskList />
      <AddNewTask />
    </div>
  );
}

export default App;
