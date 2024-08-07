import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { useState } from "react";

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
      <div className="flex items-center">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="h-[40px] border border-gray-200 w-full outline-none pl-3"
        ></input>
        <button
          onClick={handleClick}
          className="w-[40px] h-[40px] inline-flex items-center justify-center bg-green-500 text-white"
        >
          <FiPlus />
        </button>
      </div>
      <div className="mt-6">
        {tasks.map((task, index) => (
          <div key={index} className="flex border border-gray-200 p-2">
            <label
              htmlFor=""
              className={`${
                task.status ? "line-through" : ""
              } flex items-center flex-1 space-x-1`}
            >
              <input
                checked={task.status}
                type="checkbox"
                onChange={() => handleStatus(index)}
              ></input>
              <span>{task.text}</span>
            </label>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 text-white w-[30px] h-[30px] inline-flex items-center justify-center rounded-md"
              >
                <FiEdit />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white w-[30px] h-[30px] inline-flex items-center justify-center rounded-md"
              >
                <FiTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
