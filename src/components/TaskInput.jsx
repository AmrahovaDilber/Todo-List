import { FiPlus } from "react-icons/fi";

export default function TaskInput({ text, setText, handleClick }) {
  return (
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
  );
}
