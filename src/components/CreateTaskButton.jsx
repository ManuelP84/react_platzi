import React from "react";
import "../style/CreateTaskButton.css";

const CreateTaskButton = ({setOpenModal}) => {
  
  const onCLickButton = () => {
    setOpenModal(prevState => !prevState);
  }
  
  return (
    <>
      <button 
      className="CreateTaskButton"
      onClick={onCLickButton}
      >
        +
      </button>
    </>
  );
};

export { CreateTaskButton };
