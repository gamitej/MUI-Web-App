import { AppBar, styled, Toolbar } from "@mui/material";
import React from "react";

// Customised Toolbar Instead Of Toolbar
const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})

const NavBar = () => {
  return (
    <AppBar position="stick">
      <StyledToolbar>Navbar</StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
