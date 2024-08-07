import TaskItem from "./TaskItem";
export default function TaskList({
  tasks = [],
  handleDelete,
  handleEdit,
  handleStatus,
}) {
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
