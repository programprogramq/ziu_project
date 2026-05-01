import React from "react";
import TaskItem from "./TaskItem";
import type { Task } from "../types/Task";
import { Box, Typography } from "@mui/material";

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
    <Box
      component="section"
      aria-labelledby="task-list-title"
    >
      <Typography id="task-list-title" variant="h6">
        Lista zadań
      </Typography>

      {/* 🔊 live info */}
      <Box
        role="status"
        aria-live="polite"
        sx={{ position: "absolute", left: "-9999px" }}
      >
        {`Liczba zadań: ${tasks.length}`}
      </Box>

      <Box
        component="ul"
        aria-label="Zadania do wykonania"
        sx={{ listStyle: "none", padding: 0, margin: 0 }}
      >
        {tasks.map(task => (
          <Box component="li" key={task.id}>
            <TaskItem
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TaskList;