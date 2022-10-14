import React from "react";
import "../style/TaskList.css"


const TaskList = (props) => {
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TaskList };