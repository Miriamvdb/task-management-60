import "./App.css";
import AddNewTask from "./components/AddNewTask";
import TaskApp from "./components/TaskApp";

function App() {
  return (
    <div className="App">
      <h1>Task Management</h1>
      <TaskApp />
      <AddNewTask />
    </div>
  );
}

export default App;
