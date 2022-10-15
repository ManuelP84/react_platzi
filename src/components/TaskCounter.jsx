import '../style/TaskCounter.css';

/* const style = {
  backgroundColor: 'red',
  color: 'white'
} */

const TaskCounter = ({totalTasks, completedTasks, loading}) => {

  return (
    <>
      <h2 className={`taskCounter ${!!loading && 'taskCounter--loading'}`}>You have completed {completedTasks} from {totalTasks} tasks!</h2>
    </>
  );
};

export { TaskCounter };
