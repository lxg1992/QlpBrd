import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import About from "./components/About";
import Note from "./components/Note";
import AlertContainer from "./components/AlertContainer";
import Header from "./components/Header";

const App = () => {
  return (
    <Router basename="/">
      <Grid container>
        {/*<Grid container item xs={12}>*/}
        <Header />
        {/* </Grid> */}

        <Grid item xs={12} sm={3}>
          <Navigation />
        </Grid>
        <Grid container item xs={12} sm={9}>
          <AlertContainer />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/:param1">
              <h1>You must enter 3 parameters, you&apos;ve only entered one</h1>
            </Route>
            <Route exact path="/:param1/:param2">
              <h1>You must enter 3 parameters, you&apos;ve only entered two</h1>
            </Route>
            <Route exact path="/:param1/:param2/:param3">
              <Note />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
