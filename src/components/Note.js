import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import axios from "axios";

const Note = () => {
    const { param1, param2, param3 } = useParams();
    const [note, setNote] = useState("");
    const [typingTimeout, setTypingTimeout] = useState(0);
    const [isError, setError] = useState(false);
    const [timeUpdated, setTimeUpdated] = useState(0);
    const [isInitial, setInitial] = useState(true);

    useEffect(() => {
        getNote();
    }, []);

    useEffect(() => {
        if (!isInitial) {
            delayAction(postNote, 1000);
        }
    }, [note]);

    const getNote = () => {
        axios
            .get(
                `http://localhost:3000/api/notes/${param1}/${param2}/${param3}`
            )
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

    const delayAction = (fn, ms) => {
        clearTimeout(typingTimeout);

        setTypingTimeout(
            setTimeout(() => {
                fn();
            }, ms)
        );
    };

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
            <Moment fromNow>{timeUpdated}</Moment>
            <h3>Last updated: {timeUpdated ? timeUpdated : "unknown"}</h3>
        </div>
    );
};
export default Note;
