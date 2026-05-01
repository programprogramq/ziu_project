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
  const inputId = "task-input";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      aria-labelledby="task-form-label"
      sx={{ display: "flex", gap: 1, mb: 2 }}
    >
      <label id="task-form-label" htmlFor={inputId} hidden>
        {editingId ? "Edytuj zadanie" : "Dodaj nowe zadanie"}
      </label>

      <TextField
        id={inputId}
        fullWidth
        size="small"
        value={text}
        placeholder="Dodaj zadanie..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        sx={{ bgcolor: "white" }}
        inputProps={{
          "aria-describedby": "task-input-hint"
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ bgcolor: "#616161" }}
        aria-label={
          editingId ? "Zapisz edytowane zadanie" : "Dodaj nowe zadanie"
        }
      >
        {editingId ? "Edytuj" : "Dodaj"}
      </Button>

      {/* hint dla screen readera */}
      <span id="task-input-hint" hidden>
        Wpisz treść zadania i naciśnij Enter lub przycisk
      </span>
    </Box>
  );
};

export default TaskInput;