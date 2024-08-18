import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { TaskContextProvider } from "./context/GlobalContext";

export default function App() {
  return (
    <TaskContextProvider>
      <div className="w-[400px] mx-auto my-4 border border-gray-200 p-4">
        <TaskInput></TaskInput>
        <TaskFilter></TaskFilter>
        <TaskList></TaskList>
      </div>
    </TaskContextProvider>
  );
}
