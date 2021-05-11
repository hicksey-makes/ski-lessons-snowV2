import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Schedule from './Reserve/Schedule';
import About from './Info/About';
import '../css/App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="">
          <img src="https://wallpapercave.com/wp/pmSJfNk.jpg" className="mw-100 mh-100" alt="Snow falling" />
      </div>

        <main>
          <Switch>
            <Route exact path="/">
            <Link className="btn btn-info btn-lg" role="button" to="/about/">About Instructors</Link>
            <Link className="btn btn-info btn-lg" role="button" to="/schedule/">Schedule Now</Link>
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
