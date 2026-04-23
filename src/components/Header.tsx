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

import { useNavigate } from "react-router-dom";

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

  return (
    <AppBar position="static" sx={{ bgcolor: "#424242" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* MOBILE MENU */}
        {!isDesktop && (
          <IconButton color="inherit" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6">To-Do App</Typography>

        {/* DESKTOP ACTIONS */}
        {isDesktop && (
          <Box sx={{ display: "flex", gap: 2 }}>
            
            <Button color="inherit" onClick={onAddClick}>
              Dodaj zadanie
            </Button>

            <Button color="inherit">
              Lista
            </Button>

            <Button color="inherit">
              Ustawienia
            </Button>

            {/* 🔥 NOWY PRZYCISK */}
            <Button
              color="inherit"
              onClick={() => navigate("/register")}
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