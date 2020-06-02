import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  landingContainer: {
    margin: "10px auto",
    width: "90%",
    padding: "10px",
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.landingContainer}>
      <Typography variant="h3">Qlpbrd</Typography>
      <Typography variant="body1">
        Qlpbrd is a quick and easy online clipboard
      </Typography>
    </Paper>
  );
};

export default Landing;
