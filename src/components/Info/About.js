import React from "react";
import Instructor from "./Instructor.js";
import InstructorDetails from "./InstructorDetails.js";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default function About({cart}) {
  let quantity = 0;
  cart.forEach(lesson => {
    return quantity += lesson.quantity;
  })
  return (<>
    <div className="pos-rel">
      <Link className="btn blendin mb-3 mt-3 ml-4" style={{width:80 + "px"}} to="/">Home</Link>
      <div className="d-inline-block mr-auto mt-n5 pos-abs" style={{width: 150 + "px"}}>
        <Link className="btn btn-warning mb-3 ml-5 mt-3" style={{width: 80 + "px"}} to="/cart/">Cart({quantity})</Link>
      </div>
    </div>

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
