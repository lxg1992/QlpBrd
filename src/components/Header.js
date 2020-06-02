import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid item container justify="space-between" alignItems="center">
          <Typography variant="h2">Qlpbrd</Typography>
          <IconButton href="https://github.com/lxg1992/QlpBrd" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
