import "../App.css";
import { useTasks } from "./useTasks";
import { CreateTaskButton } from "../components/CreateTaskButton";
import { TaskHeader } from "../components/TaskHeader";
import { Modal } from "../components/Modal";
import { TaskForm } from "../components/TaskForm";
import { TaskItem } from "../components/TaskItem";
import { TaskList } from "../components/TaskList";
import { TaskCounter } from "../components/TaskCounter";
import { TaskSearch } from "../components/TaskSearch";
import { TasksError } from "../components/TasksError";
import { TasksLoading } from "../components/TasksLoading";
import { NewTask } from "../components/NewTask";

function App() {
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
    setSearchValue,
    addTask,
  } = useTasks();
  return (
    <div className="App">
      <TaskHeader loading={loading}>
        <TaskCounter
          totalTasks={totalTasks}
          completedTasks={completedTasks}
        />
        <TaskSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TaskHeader>

      <TaskList
        error={error}
        searchValue={searchValue}
        totalTasks={totalTasks}
        loading={loading}
        searchTasks={searchTasks}
        onError={() => <TasksError />}
        onLoading={() => <TasksLoading />}
        onNewtask={() => <NewTask />}
        onEmptySearchResults={(searchResult) => (
          <p>There is no results for {searchResult}</p>
        )}
        render={(task) => (
          <TaskItem
            key={task.id}
            description={task.description}
            isDone={task.isDone}
            toogleDone={() => toogleDone(task.id)}
            deleteTask={() => deleteTask(task.id)}
          />
        )}
      >
        {/* {task => (
          <TaskItem
            key={task.id}
            description={task.description}
            isDone={task.isDone}
            toogleDone={() => toogleDone(task.id)}
            deleteTask={() => deleteTask(task.id)}
          
          />
        )}  */}
      </TaskList>

      {openModal && (
        <Modal>
          <TaskForm addTask={addTask} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTaskButton setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
