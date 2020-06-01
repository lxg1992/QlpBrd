import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h2">Qlpbrd</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
