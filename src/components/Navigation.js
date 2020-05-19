import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CustomLink from "./CustomLink";

import "../styles.scss";

const Navigation = (props) => {
  const { links } = props;
  console.log("NAVIGATION PROPS", props);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {links &&
          links.map((link, idx) => <CustomLink link={link} key={idx} />)}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  links: PropTypes.array,
};

export default Navigation;
