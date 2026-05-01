import React from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true
      }}
      PaperProps={{
        component: "nav",
        "aria-label": "Główne menu"
      }}
    >
      <Box sx={{ width: 250 }}>
        <List aria-label="Nawigacja aplikacji">
          <ListItem disablePadding>
            <ListItemButton
              onClick={onClose}
              aria-label="Przejdź do listy zadań"
            >
              <ListItemText primary="Lista zadań" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;