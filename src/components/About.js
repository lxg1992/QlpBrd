import React from "react";

import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  aboutContainer: {
    margin: "10px auto",
    width: "90%",
    padding: "10px",
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.aboutContainer}>
      <Typography>About page!</Typography>
    </Paper>
  );
};

export default About;
