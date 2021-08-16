import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import About from "../about/About";
import Settings from "../settings/Settings";
import NotFound from "./NotFound";

function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/home"} />
      </Route>
      <Route path="/home">
        <Homepage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
