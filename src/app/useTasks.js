import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useTasks = () => {
  const {
    item: tasks,
    saveItem: setTasks,
    loading,
    error,
  } = useLocalStorage("TASKS_V1", []); // Custom hook

  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const completedTasks = tasks.filter((task) => task.isDone).length;
  const totalTasks = tasks.length;

  const searchTasks = tasks.filter((task) =>
    task.description
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase())
  );

  const toogleDone = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);

    // Other way.
    // const task = tasks.find((task) => task.id === id );
    // task.isDone = !task.isDone;
    // const newTasks = tasks.filter((task) => task.id !== id);
    // setTasks([...newTasks, task]);
  };

  const addTask = (description) => {
    const newTasks = [...tasks];
    newTasks.push({
      isDone: false,
      id: Math.random(100000),
      description,
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    // Other way
    // const index = tasks.findIndex(task => task.id === id);
    // const newTasks = [...tasks]
    // tasks.splice(index, 1);
    // setTasks(newTasks);
  };

  return {
    loading,
    error,
    totalTasks,
    completedTasks,
    searchValue,
    setSearchValue,
    searchTasks,
    toogleDone,
    deleteTask,
    openModal,
    setOpenModal,
    addTask,
  };
};

export { useTasks };
