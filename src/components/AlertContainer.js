import React from "react";
import { useSelector } from "react-redux";
import { TextareaAutosize, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  alertContainer: {
    margin: "10px auto",
    width: "90%",
    padding: "10px",
  },
});

const AlertContainer = () => {
  const { visible, text, category } = useSelector((state) => state.alert);
  const classes = useStyles();

  return visible ? (
    <Paper className={classes.alertContainer}>
      <Typography color="primary">
        {category} alert: {text}
      </Typography>
    </Paper>
  ) : (
    <Paper className={classes.alertContainer}>
      <Typography color="secondary">
        Use your browser window to navigate to different notes (
        qlpbrd.herokuapp.com /enter/parameters/here )
      </Typography>
    </Paper>
  );
};

export default AlertContainer;
