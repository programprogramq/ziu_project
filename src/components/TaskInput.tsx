import React from "react";
import { Box, TextField, Button } from "@mui/material";

interface Props {
  text: string;
  setText: (value: string) => void;
  addTask: () => void;
  editingId: number | null;
}

const TaskInput: React.FC<Props> = ({
  text,
  setText,
  addTask,
  editingId
}) => {
  return (
    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
      <TextField
        fullWidth
        size="small"
        value={text}
        placeholder="Dodaj zadanie..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        sx={{ bgcolor: "white" }}
      />
      <Button
        variant="contained"
        onClick={addTask}
        sx={{ bgcolor: "#616161" }}
      >
        {editingId ? "Edytuj" : "Dodaj"}
      </Button>
    </Box>
  );
};

export default TaskInput;