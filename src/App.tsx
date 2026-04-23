import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/toDoPage";
import RegisterPage from "./pages/register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}