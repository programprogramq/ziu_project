import React, { useState } from "react";
import { Box } from "@mui/material";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import useResponsive from "../hooks/useResponsive";
import type { Task } from "../types/Task";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const { isMobile, isTablet, isDesktop } = useResponsive();

  const addTask = (): void => {
    if (!text.trim()) return;

    if (editingId !== null) {
      setTasks(tasks.map(t =>
        t.id === editingId ? { ...t, text } : t
      ));
      setEditingId(null);
    } else {
      const newTask: Task = {
        id: Date.now(),
        text,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }

    setText("");
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleTask = (id: number): void => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const editTask = (task: Task): void => {
    setText(task.text);
    setEditingId(task.id);
  };

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Header
        onMenuClick={() => setDrawerOpen(true)}
        isDesktop={isDesktop}
      />

      {!isDesktop && (
        <Sidebar
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      )}

      <Box sx={{ p: 2 }}>
        <TaskInput
          text={text}
          setText={setText}
          addTask={addTask}
          editingId={editingId}
        />

        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, 1fr)"
              : "repeat(auto-fit, minmax(250px, 1fr))"
          }}
        >
          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </Box>
      </Box>
    </Box>
  );
}