import '../style/TaskCounter.css';

/* const style = {
  backgroundColor: 'red',
  color: 'white'
} */

const TaskCounter = ({totalTasks, completedTasks}) => {

  return (
    <>
      <h2 className="taskCounter">You have completed {completedTasks} from {totalTasks} tasks!</h2>
    </>
  );
};

export { TaskCounter };
