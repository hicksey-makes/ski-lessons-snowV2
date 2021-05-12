import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Schedule from './Reserve/Schedule';
import About from './Info/About';
import '../css/App.css';

export default function App() {
  return (

    <BrowserRouter>
    <main>
          <Switch>
            <Route className="backdrop" exact path="/">
            <div className="img-snow">
              <div className="d-flex justify-content-center grow">
                  <Link className="btn btn-info btn-lg first mr-3 shrink" role="button" to="/about/">About Instructors</Link>
                  <Link className="btn btn-info btn-lg next ml-3 shrink" role="button" to="/schedule/">See Schedule</Link>
              </div>
            </div>
            </Route>

            <Route path="/about/">
              <About  />
            </Route>
            <Route exact path="/schedule/">
              <Schedule  />
            </Route>
          </Switch>
      </main>
    </BrowserRouter>
  )
}
