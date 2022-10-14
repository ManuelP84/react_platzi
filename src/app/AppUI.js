import { useContext } from "react";
import "../App.css";
import { CreateTaskButton } from "../components/CreateTaskButton";
import { Modal } from "../components/Modal";
import { TaskCounter } from "../components/TaskCounter";
import { TaskForm } from "../components/TaskForm";
import { TaskItem } from "../components/TaskItem";
import { TaskList } from "../components/TaskList";
import { TaskSearch } from "../components/TaskSearch";
import { Context } from "../context/storeProvider";

const AppUI = () => {
  const {
    error,
    loading,
    searchTasks,
    toogleDone,
    deleteTask,
    openModal,
    setOpenModal,
  } = useContext(Context);

  return (
    <div className="App">
      <TaskCounter />
      <TaskSearch />
      <TaskList>
        {error && <p>Hubo un error...</p>}
        {loading && <p>Loading...</p>}
        {!loading && !error && <p>Create a new task</p>}

        {searchTasks.map((task) => (
          <TaskItem
            key={task.id}
            description={task.description}
            isDone={task.isDone}
            toogleDone={() => toogleDone(task.id)}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
      </TaskList>
      {openModal && (
        <Modal>
          <TaskForm/>
        </Modal>
      )}

      <CreateTaskButton 
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export { AppUI };
