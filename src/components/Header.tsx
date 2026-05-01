import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  onMenuClick: () => void;
  isDesktop: boolean;
  onAddClick: () => void;
}

const Header: React.FC<Props> = ({
  onMenuClick,
  isDesktop,
  onAddClick
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar
      position="static"
      component="header"
      sx={{ bgcolor: "#424242" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* MOBILE MENU */}
        {!isDesktop && (
          <IconButton
            color="inherit"
            onClick={onMenuClick}
            aria-label="Otwórz menu"
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography
          variant="h6"
          component="h1"
          sx={{ flexGrow: 1, textAlign: isDesktop ? "left" : "center" }}
        >
          To-Do App
        </Typography>

        {/* DESKTOP NAVIGATION */}
        {isDesktop && (
          <Box
            component="nav"
            aria-label="Główna nawigacja"
            sx={{ display: "flex", gap: 2 }}
          >
            <Button
              color="inherit"
              onClick={onAddClick}
              aria-label="Dodaj nowe zadanie"
            >
              Dodaj zadanie
            </Button>

            <Button
              color="inherit"
              onClick={() => navigate("/")}
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Lista
            </Button>

            <Button
              color="inherit"
              onClick={() => navigate("/settings")}
              aria-current={
                location.pathname === "/settings" ? "page" : undefined
              }
            >
              Ustawienia
            </Button>

            <Button
              color="inherit"
              onClick={() => navigate("/register")}
              aria-current={
                location.pathname === "/register" ? "page" : undefined
              }
            >
              Rejestracja
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;