import "./App.css";
import AddNewTask from "./components/AddNewTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <h1 style={{ paddingLeft: "2rem", fontSize: 40 }}>Task Management</h1>
      <TaskList />
      <AddNewTask />
    </div>
  );
}

export default App;
