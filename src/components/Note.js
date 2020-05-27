import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Moment from "react-moment";
import { TextareaAutosize, Typography } from "@material-ui/core";
import axios from "axios";
import { useDispatch } from "react-redux";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

let prefix;

if (process.env.PLATFORM === "heroku") {
  prefix = `https://qlpbrd.herokuapp.com:${PORT}`;
} else {
  prefix = `http://localhost:${PORT}`;
}

import delayAction from "../helpers/delay";
import { addLink } from "../redux/actions/linksActions";
import {
  info_alert,
  remove_alert,
  success_alert,
  error_alert,
} from "../redux/actions/alertActions";

const Note = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { param1, param2, param3 } = useParams();
  const [note, setNote] = useState(" ");
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [timeUpdated, setTimeUpdated] = useState(0);
  const [isInitial, setInitial] = useState(true);

  useEffect(() => {
    getNote();
    dispatch(addLink(`${param1}/${param2}/${param3}`));
  }, []);

  useEffect(() => {
    setInitial(true);
    getNote();
  }, [location]);

  useEffect(() => {
    if (!isInitial) {
      delayAction(postNote, 1000, typingTimeout, setTypingTimeout);
    }
  }, [note]);

  const getNote = () => {
    axios
      .get(`${prefix}/api/notes/${param1}/${param2}/${param3}`)
      .then((res) => {
        console.log("getNote(): ", res.data);
        setNote(res.data.note);
        setTimeUpdated(res.data.created_at);
        dispatch(info_alert(`${param1}/${param2}/${param3} retrieved`));
        setTimeout(() => dispatch(remove_alert()), 5000);
      })
      .catch((err) => {
        dispatch(error_alert(`Error while getting note:${err}`));
      });
  };

  const handleChange = (e) => {
    setInitial(false);
    setNote(e.target.value);
  };

  const postNote = () => {
    axios
      .put(
        `${prefix}/api/notes/${param1}/${param2}/${param3}`,
        { note },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setNote(res.data.note);
        setTimeUpdated(res.data.created_at);
        dispatch(success_alert(`${param1}/${param2}/${param3} updated`));
        setTimeout(() => dispatch(remove_alert()), 5000);

        console.log(`postNote(${param1},${param2},${param3})`, res.data);
      })
      .catch((err) => {
        dispatch(error_alert(`Error while getting note:${err}`));
      });
  };

  return (
    <div>
      <Typography variant="h3">{param1}</Typography>
      <hr />
      <Typography variant="h3">{param2}</Typography>
      <hr />
      <Typography variant="h3">{param3}</Typography>
      <hr />
      <TextareaAutosize
        rowsMin={5}
        value={note}
        onChange={handleChange}
        name="text"
        placeholder="This field is currently empty"
      />
      <Moment fromNow interval={5000}>
        {timeUpdated}
      </Moment>
      <Typography variant="h3">
        Last updated: {timeUpdated ? <Moment>{timeUpdated}</Moment> : "unknown"}
      </Typography>
    </div>
  );
};
export default Note;
