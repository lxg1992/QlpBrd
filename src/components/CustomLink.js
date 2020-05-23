import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useStore } from "react-redux";

import { removeLink } from "../redux/actions/linksActions";
import { info_alert, remove_alert } from "../redux/actions/alertActions";
import "../styles.scss";

const CustomLink = (props) => {
  const { link } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useStore();

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
          dispatch(info_alert(`${link} removed`));
          setTimeout(() => dispatch(remove_alert()), 5000);
          console.log(store.getState());
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
