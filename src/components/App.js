import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import '../css/App.css';

import AddLessons from './AddLessons.js';
import SearchLessons from './SearchLessons.js';
import ListLessons from './ListLessons.js';

function App() {
  const [myLessons, setMyLessons] = useState("");

   useEffect(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        console.log(data);
        setMyLessons(data);}
    }).catch(error => console.log(error));
  }, []);

  return (
    <main class="   " id="  ">
      <div class="container">
        <div class="row">
          <div class="col-md-12  ">
            <div class="container">

              <AddLessons  />
              <SearchLessons  />
              <ListLessons  />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
