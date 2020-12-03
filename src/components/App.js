import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import '../css/App.css';

import AddLessons from './AddLessons.js';
import SearchLessons from './SearchLessons.js';
import ListLessons from './ListLessons.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myLessons: []
    };
  }

  componentDidMount() {
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const lessons = result.map(item => {
        return item;
      });
      this.setState({
        myLessons: lessons
      });
    });
}

 render() {

   const listItems = this.state.myLessons.map(item => (
     <div>{item.boarderName}</div>
   ));

   return (
    <main class="   " id="  ">
      <div class="container">
        <div class="row">
          <div class="col-md-12  ">
            <div class="container">
              {listItems}
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
};

export default App;
