import { createContext, useContext } from "react";
import { useState } from "react";

export const MainContext = createContext()
export const useTaskContext=()=>useContext(MainContext)


export const TaskContextProvider = ({ children }) => {
    
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
      });
    
      const mainTasks = tasks;
    
      const [text, setText] = useState("");
      const [editIndex, setEditIndex] = useState(null);
      const [status, setStatus] = useState("all");
    
      const saveStorage = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      };
    
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
          saveStorage(items);
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
        saveStorage(items);
      }
    
      function handleStatus(index) {
        const items = [...tasks];
        items[index].status = items[index].status ? 0 : 1;
        setTasks(items);
        saveStorage(items);
      }
    
      const handleChangeStatus = (value) => {
        setStatus(value);
        const items = [...mainTasks];
        let status = "";
        if (value === "Pending") status = 0;
        else if (value === "Completed") status = 1;
        if (status.toString()) setTasks(items.filter((i) => i.status === status));
        else {
          setTasks(items);
        }
      };
    
      const data = {
        text,
        setText,
        handleClick,
        status,
        handleChangeStatus,
        tasks,
        handleDelete,
        handleEdit,
        handleStatus,
      };
    return <MainContext.Provider value={data}>
        {children}
    </MainContext.Provider>
}