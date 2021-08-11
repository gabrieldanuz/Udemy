import React from "react";
import "./tasklist.css";
import Proptypes from "prop-types";

import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.taskState}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
      </div>
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
}

TaskList.propTypes = {
  title: Proptypes.string.isRequired,
  onAddTask: Proptypes.func.isRequired,
  tasks: Proptypes.array.isRequired
};
