import React from "react";
import { Box, Checkbox, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type { Task } from "../types/Task";

interface Props {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (task: Task) => void;
}

const TaskItem: React.FC<Props> = ({
  task,
  toggleTask,
  deleteTask,
  editTask
}) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        p: 2,
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <Typography
          sx={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "gray" : "black"
          }}
        >
          {task.text}
        </Typography>
      </Box>

      <Box>
        <IconButton onClick={() => editTask(task)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteTask(task.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TaskItem;