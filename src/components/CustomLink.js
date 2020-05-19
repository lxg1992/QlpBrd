import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles.scss";

const CustomLink = (props) => {
  const { link } = props;
  const history = useHistory();

  return (
    <li>
      <h3
        onClick={() => {
          history.push("/");
          history.push(link);
        }}
      >
        {link}
      </h3>
      {/* <NavLink to={link} activeClassName="disabled">
        {link}
      </NavLink> */}
    </li>
  );
};

CustomLink.propTypes = {
  link: PropTypes.string,
};

export default CustomLink;
