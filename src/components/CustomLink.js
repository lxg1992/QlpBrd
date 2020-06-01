import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useStore } from "react-redux";
import { Button, Box, Typography, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { removeLink } from "../redux/actions/linksActions";
import { info_alert, remove_alert } from "../redux/actions/alertActions";

const useStyles = makeStyles({
  root: {
    margin: "5px 10px 5px",
  },
});

const CustomLink = ({ link, number }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useStore();

  return (
    <Box className={classes.root}>
      <ButtonGroup
        size="small"
        orientation="horizontal"
        color="primary"
        fullWidth
      >
        <Button
          onClick={() => {
            dispatch(removeLink(link));
            dispatch(info_alert(`${link} removed`));
            setTimeout(() => dispatch(remove_alert()), 5000);
            console.log(store.getState());
          }}
        >
          CLOSE
        </Button>
        <Button
          onClick={() => {
            history.push("/");
            history.push(link);
          }}
        >
          <Typography>
            {number}. {link}
          </Typography>
        </Button>
      </ButtonGroup>
    </Box>
  );
};

CustomLink.propTypes = {
  link: PropTypes.string,
};

export default CustomLink;
