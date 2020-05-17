import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
          links.map((link, idx) => (
            <li key={idx}>
              <Link to={link}>{link}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  links: PropTypes.array,
};

export default Navigation;
