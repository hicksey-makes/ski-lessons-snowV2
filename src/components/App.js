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
      const lsns = result.map(item => {
        return item;
      });
      this.setState({
        myLessons: lsns
      });
    });
}

 render() {
   return (
    <main class="   " id="  ">
      <div class="container">
        <div class="row">
          <div class="col-md-12  ">
            <div class="container">
              <AddLessons  />
              <SearchLessons  />
              <ListLessons lessons={this.state.myLessons} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
};

export default App;
