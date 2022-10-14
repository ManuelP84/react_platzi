import React, { useContext } from "react";
import { Context } from "../context/storeProvider";
import '../style/TaskCounter.css';

/* const style = {
  backgroundColor: 'red',
  color: 'white'
} */

const TaskCounter = () => {

  const {totalTasks, completedTasks} = useContext(Context);
  return (
    <>
      <h2 className="taskCounter">You have completed {completedTasks} from {totalTasks} tasks!</h2>
    </>
  );
};

export { TaskCounter };
