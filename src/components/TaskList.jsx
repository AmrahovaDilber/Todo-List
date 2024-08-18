
import TaskItem from "./TaskItem";
import {  useTaskContext } from "../context/GlobalContext";
export default function TaskList() {
  const { tasks, handleDelete, handleEdit, handleStatus } = useTaskContext()

  return (
    <div className="mt-6">
      {tasks.map((task, index) => (
        <TaskItem
          task={task}
          key={index}
          index={index}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleStatus={handleStatus}
        ></TaskItem>
      ))}
    </div>
  );
}
