import React from "react";
import Instructor from "./Instructor.js";
import InstructorDetails from "./InstructorDetails.js";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default function About() {
  return (<>
    <Link to="/">Home</Link>
    <BrowserRouter>
      <Switch>
        <Route exact path="/about">
          <Instructor />
        </Route>
        <Route exact path="/about/instructors/:id">
          <InstructorDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  </>);
}
