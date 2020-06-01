import React from "react";
import { useSelector } from "react-redux";

const AlertContainer = () => {
  const { visible, text, category } = useSelector((state) => state.alert);

  return visible ? <div className={category}>{text}</div> : "";
};

export default AlertContainer;
