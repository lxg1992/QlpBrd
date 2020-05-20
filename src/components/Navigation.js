import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import CustomLink from "./CustomLink";
import { clearLinks } from "../redux/actions/linksActions";

import "../styles.scss";

const Navigation = (props) => {
  const { links } = props;
  const dispatch = useDispatch();
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
      </ul>
      <ul>
        {links && links.map((link) => <CustomLink link={link} key={link} />)}
      </ul>
      <ul>
        {links.length > 0 && (
          <li>
            <span
              onClick={() => {
                dispatch(clearLinks());
              }}
            >
              Remove all
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  links: PropTypes.array,
};

export default Navigation;
