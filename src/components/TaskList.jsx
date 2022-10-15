import React from "react";
import "../style/TaskList.css"

const TaskList = (props) => {
    const renderFunction = props.children || props.render
    return(
        <section className="TaskList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {!props.loading && !props.error && !props.totalTasks && props.onNewtask()}
            {!!props.totalTasks && !props.loading && !props.searchTasks.length && props.onEmptySearchResults(props.searchValue)}
            {props.searchTasks.map(renderFunction)}
        </section>
    )
}

export { TaskList };