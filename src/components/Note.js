import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import axios from "axios";
import { useDispatch, useStore } from "react-redux";

import delayAction from "../helpers/delay";
import { addLink } from "../redux/actions/linksActions";

const Note = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { param1, param2, param3 } = useParams();
  const [note, setNote] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [isError, setError] = useState(false);
  const [timeUpdated, setTimeUpdated] = useState(0);
  const [isInitial, setInitial] = useState(true);

  useEffect(() => {
    getNote();
    dispatch(addLink(`${param1}/${param2}/${param3}`));

    console.log(store.getState());
  }, []);

  useEffect(() => {
    if (!isInitial) {
      delayAction(postNote, 1000, typingTimeout, setTypingTimeout);
    }

    return () => {};
  }, [note]);

  const getNote = () => {
    axios
      .get(`http://localhost:3000/api/notes/${param1}/${param2}/${param3}`)
      .then((res) => {
        console.log("getNote(): ", res.data);
        setNote(res.data.note);
        setTimeUpdated(res.data.created_at);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleChange = (e) => {
    setInitial(false);
    setNote(e.target.value);
  };

  // // const delayAction = (fn, ms) => {
  // //     clearTimeout(typingTimeout);

  // //     setTypingTimeout(
  // //         setTimeout(() => {
  // //             fn();
  // //         }, ms)
  // //     );
  // // };

  const postNote = () => {
    axios
      .put(
        `http://localhost:3000/api/notes/${param1}/${param2}/${param3}`,
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
        console.log("postNote(): ", res.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div>
      {isError && <h3>{isError}</h3>}
      <h3>{param1}</h3>
      <hr />
      <h3>{param2}</h3>
      <hr />
      <h3>{param3}</h3>
      <hr />
      <textarea
        value={note}
        onChange={handleChange}
        name="text"
        placeholder="This field is currently empty"
      ></textarea>
      <Moment fromNow interval={5000}>
        {timeUpdated}
      </Moment>
      <h3>
        Last updated: {timeUpdated ? <Moment>{timeUpdated}</Moment> : "unknown"}
      </h3>
    </div>
  );
};
export default Note;
