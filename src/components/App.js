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
              <Link className="btn btn-info btn-lg" role="button" to="/about/">About Instructors</Link>
              <Link className="btn btn-info btn-lg" role="button" to="/schedule/">Schedule Now</Link>
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
