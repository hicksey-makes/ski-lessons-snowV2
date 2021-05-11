import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Schedule from './Reserve/Schedule';
import About from './Info/About';

export default function App() {
  return (
    <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/">
            <Link to="/about/">About Instructors</Link>
            <Link to="/schedule/">Schedule Now</Link>
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
