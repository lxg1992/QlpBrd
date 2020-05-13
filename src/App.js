import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import About from "./components/About";
import Note from "./components/Note";

const App = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>

                <Route exact path="/:param1">
                    <h1>
                        You must enter 3 parameters, you've only entered one
                    </h1>
                </Route>
                <Route exact path="/:param1/:param2">
                    <h1>
                        You must enter 3 parameters, you've only entered two
                    </h1>
                </Route>
                <Route exact path="/:param1/:param2?/:param3?">
                    <Note />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
