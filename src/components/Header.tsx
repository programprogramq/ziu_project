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

interface Props {
  onMenuClick: () => void;
  isDesktop: boolean;
}

const Header: React.FC<Props> = ({ onMenuClick, isDesktop }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#424242" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {!isDesktop && (
          <IconButton color="inherit" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6">To-Do App</Typography>

        {isDesktop && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit">Lista</Button>
            <Button color="inherit">Ustawienia</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;