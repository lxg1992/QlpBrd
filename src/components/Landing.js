import React from "react";
import { Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  landingContainer: {
    margin: "10px auto",
    width: "90%",
    padding: "10px",
  },
  textMargins: {
    margin: "15px 0",
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.landingContainer}>
      <Typography className={classes.textMargins} variant="h3">
        Qlpbrd
      </Typography>
      <Typography className={classes.textMargins} variant="h6">
        Qlpbrd is a quick and easy online clipboard
      </Typography>
      <Divider />
      <Typography className={classes.textMargins} variant="body1">
        To use, navigate to your desired parameterized location like so:
      </Typography>
      <Divider />
      <Typography className={classes.textMargins} variant="body2">
        qlpbrd.herokuapp.com/parameter1/parametertwo/paramIII
      </Typography>
      <Divider />

      <Typography className={classes.textMargins} variant="body1">
        The app will save your links for future use on left hand side (top on
        mobile)
      </Typography>
    </Paper>
  );
};

export default Landing;
