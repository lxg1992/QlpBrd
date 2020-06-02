import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, makeStyles } from "@material-ui/core";

import CustomLink from "./CustomLink";
import { clearLinks } from "../redux/actions/linksActions";

const useStyles = makeStyles({
  root: {
    maxHeight: "100%",
  },
  button: {
    margin: "5px 5px 0",
  },
});

const Navigation = () => {
  const classes = useStyles();
  const links = useSelector((state) => state.links);
  const dispatch = useDispatch();
  return (
    <Grid
      container
      item
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      className={classes.root}
    >
      <Button
        color="primary"
        className={classes.button}
        variant="contained"
        component={RouterLink}
        to="/"
      >
        Home
      </Button>

      <Button
        className={classes.button}
        color="secondary"
        component={RouterLink}
        to="/about"
      >
        About
      </Button>

      {links && links.length > 0 && (
        <Grid container item direction="column" justify="center">
          {links.map((link, idx) => (
            <CustomLink link={link} key={link} />
          ))}
          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
            disableElevation
            onClick={() => {
              dispatch(clearLinks());
            }}
          >
            Remove all
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

Navigation.propTypes = {
  links: PropTypes.array,
};

export default Navigation;
