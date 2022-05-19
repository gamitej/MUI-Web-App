import React from "react";
import { ModeNight } from "@mui/icons-material";
import {
  Box,
  List,
  Switch,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import { listSidebar } from "../DataArray/ArrayList";

const SideBar = () => {
  return (
    <>
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <List>
          {listSidebar.map((p) => (
            <ListItem disablePadding>
              <ListItemButton component="a" href={p.href}>
                <ListItemIcon>{p.icon}</ListItemIcon>
                <ListItemText primary={p.primary} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default SideBar;
