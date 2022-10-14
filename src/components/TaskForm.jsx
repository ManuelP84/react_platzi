import { useState } from "react";
import '../style/TaskForm.css'

const TaskForm = ({ addTask, setOpenModal }) => {
    const [ newTaskValue, setNewTaskValue ] = useState('');

    const onChange = (e) => {
        setNewTaskValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Write your task...</label>
            <textarea 
                value={newTaskValue}
                onChange={onChange}
                placeholder="Task to do"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>

        </form>
    );
}

export { TaskForm };