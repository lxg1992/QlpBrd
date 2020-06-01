import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Typography,
  Grid,
  ButtonGroup,
  makeStyles,
} from "@material-ui/core";

import CustomLink from "./CustomLink";
import { clearLinks } from "../redux/actions/linksActions";

const Navigation = () => {
  const links = useSelector((state) => state.links);
  const dispatch = useDispatch();
  return (
    <Grid
      container
      item
      direction="column"
      justify="flex-start"
      alignItems="stretch"
    >
      <Button color="primary" component={RouterLink} to="/">
        Home
      </Button>

      <Button color="secondary" component={RouterLink} to="/about">
        About
      </Button>

      {links && (
        <Grid item direction="row" justify="flex-start">
          {links.map((link, idx) => (
            <CustomLink link={link} key={link} number={idx} />
          ))}
        </Grid>
      )}

      {links.length > 0 && (
        <Button
          onClick={() => {
            dispatch(clearLinks());
          }}
        >
          Remove all
        </Button>
      )}
    </Grid>
  );
};

Navigation.propTypes = {
  links: PropTypes.array,
};

export default Navigation;
