import React from "react";
import "../style/TaskItem.css"

const TaskItem = (props) => {

const onClickComplete = () => {
  props.toogleDone();
}

const onClickDelete = () => {
  props.deleteTask();
}

  return (
    <li className="TaskItem">
      <span 
      className={`Icon Icon-check ${props.isDone && 'Icon-check--active'}`}
      onClick={onClickComplete}
      >
        √
      </span>
      <p className={`TaskItem-p ${props.isDone && 'TaskItem-p--complete'}`}
      >
        {props.description}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={onClickDelete}
      >
        X
      </span>
    </li>
  );
};

export { TaskItem };
