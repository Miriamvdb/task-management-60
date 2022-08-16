import "./App.css";
import AddNewTask from "./components/AddNewTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>Task Management</h1>
      <TaskList />
      <AddNewTask />
    </div>
  );
}

export default App;
