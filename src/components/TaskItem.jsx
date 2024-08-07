import { FiEdit, FiTrash } from "react-icons/fi";
export default function TaskItem({
  index,
  task,
  handleDelete,
  handleEdit,
  handleStatus,
}) {
  return (
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
  );
}
