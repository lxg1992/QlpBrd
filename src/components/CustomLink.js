import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { removeLink } from "../redux/actions/alertActions";
import "../styles.scss";

const CustomLink = (props) => {
  const { link } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <li>
      <span
        onClick={() => {
          history.push("/");
          history.push(link);
        }}
      >
        {link}
      </span>
      <span
        onClick={() => {
          dispatch(removeLink(link));
        }}
      >
        CLOSE
      </span>
    </li>
  );
};

CustomLink.propTypes = {
  link: PropTypes.string,
};

export default CustomLink;
