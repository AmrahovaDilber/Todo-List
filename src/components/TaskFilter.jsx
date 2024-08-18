import { useTaskContext } from "../context/GlobalContext";

export default function TaskFilter() {
  const { status, onClick } = useTaskContext();
  return (
    <div className="mt-5 gap-x-1 flex items-center">
      <button
        onClick={() => onClick("All")}
        className={`${
          status === "All" ? "bg-gray-200" : ""
        } h-[35px] border border-gray-200  rounded-lg flex-1 inline-flex items-center justify-center `}
      >
        All
      </button>
      <button
        onClick={() => onClick("Pending")}
        className={`${
          status === "Pending" ? "bg-gray-200" : ""
        } h-[35px] border border-gray-200  rounded-lg flex-1 inline-flex items-center justify-center `}
      >
        Pending
      </button>
      <button
        onClick={() => onClick("Completed")}
        className={`${
          status === "Completed" ? "bg-gray-200" : ""
        } h-[35px] border border-gray-200  rounded-lg flex-1 inline-flex items-center justify-center `}
      >
        Completed
      </button>
    </div>
  );
}
