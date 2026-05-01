import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import TodoPage from "./pages/toDoPage";
import RegisterPage from "./pages/register";

function RouteAnnouncer() {
  const location = useLocation();

  useEffect(() => {
    const title = document.title;
    const el = document.getElementById("route-announcer");

    if (el) {
      el.textContent = `Zmieniono stronę: ${location.pathname}`;
    }

    document.title = title;
  }, [location]);

  return (
    <div
      id="route-announcer"
      role="status"
      aria-live="polite"
      style={{
        position: "absolute",
        left: "-9999px"
      }}
    />
  );
}

function NotFound() {
  return (
    <main>
      <h1>404 - Strona nie istnieje</h1>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteAnnouncer />

      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}