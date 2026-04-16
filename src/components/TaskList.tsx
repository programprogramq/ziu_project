import React from "react";
import TaskItem from "./TaskItem";
import type { Task } from "../types/Task";

interface Props {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (task: Task) => void;
}

const TaskList: React.FC<Props> = ({
  tasks,
  toggleTask,
  deleteTask,
  editTask
}) => {
  return (
    <>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </>
  );
};

export default TaskList;