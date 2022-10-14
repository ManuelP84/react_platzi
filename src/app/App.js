import "../App.css";
import { StoreProvider } from "../context/storeProvider";
import { AppUI } from "./AppUI";

// const defaultTasks = [
//   {
//     id: "1",
//     description: "Task 1",
//     isDone: true
//   },
//   {
//     id: "2",
//     description: "Task 2",
//     isDone: true
//   },
//   {
//     id: "3",
//     description: "Task 3",
//     isDone: false
//   },
//   {
//     id: "4",
//     description: "Task 4",
//     isDone: false
//   }
// ]

function App() {
  return (
    <StoreProvider>
      <AppUI />
    </StoreProvider>
  );
}

export default App;
