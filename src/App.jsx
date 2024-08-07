import { useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
export default function App() {
  const [tasks, setTasks] = useState([
    { text: "Task1", status: 0 },
    { text: "Task2", status: 0 },
  ]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function handleClick() {
    if (text.trim()) {
      const items = [...tasks];
      if (editIndex !== null) {
        items[editIndex].text = text;
        setEditIndex(null);
      } else {
        items.push({ text: text, status: 0 });
      }
      setText("");
      setTasks(items);
    }
  }

  function handleEdit(index) {
    if (tasks[index]) {
      setEditIndex(index);
      const task = tasks[index];
      setText(task.text);
    }
  }

  function handleDelete(index) {
    const items = [...tasks];
    items.splice(index, 1);
    setTasks(items);
  }

  function handleStatus(index) {
    const items = [...tasks];
    items[index].status = !items[index].status;
    setTasks(items);
  }

  return (
    <div className="w-[400px] mx-auto my-4 border border-gray-200 p-4">
      <TaskInput
        text={text}
        setText={setText}
        handleClick={handleClick}
      ></TaskInput>
      <TaskList
        tasks={tasks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleStatus={handleStatus}
      ></TaskList>
    </div>
  );
}
