import React from "react";
import { Drawer, Box, List, ListItem, ListItemText } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 250 }}>
        <List>
          <ListItem button>
            <ListItemText primary="Lista zadań" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;