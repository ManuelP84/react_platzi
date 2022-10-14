import { useContext } from "react";
import "../App.css";
import { CreateTaskButton } from "../components/CreateTaskButton";
import { TaskHeader } from "../components/TaskHeader";
import { Modal } from "../components/Modal";
import { TaskForm } from "../components/TaskForm";
import { TaskItem } from "../components/TaskItem";
import { TaskList } from "../components/TaskList";
import { Context } from "../context/storeProvider";
import {TaskCounter} from '../components/TaskCounter'
import {TaskSearch} from '../components/TaskSearch'

const AppUI = () => {
  const {
    error,
    loading,
    searchTasks,
    toogleDone,
    deleteTask,
    openModal,
    setOpenModal,
    totalTasks, 
    completedTasks,
    searchValue, 
    setSearchValue
  } = useContext(Context);

  return (
    <div className="App">
      <TaskHeader>
        <TaskCounter
        totalTasks={totalTasks} 
        completedTasks={completedTasks}
        />
        <TaskSearch
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        />
      </TaskHeader>

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
