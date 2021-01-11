import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import '../css/App.css';

import AddLessons from './AddLessons.js';
import SearchLessons from './SearchLessons.js';
import ListLessons from './ListLessons.js';

import {without} from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myLessons: [],
      formDisplay: false,
      lastIndex: 0
    };
    this.deleteLesson = this.deleteLesson.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
  }

  deleteLesson(lsn) {
    let tempLsns = this.state.myLessons;
    tempLsns = without(tempLsns, lsn);

    this.setState({
      myLessons: tempLsns
    });
  }

  toggleAdd() {
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  componentDidMount() {
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const lsns = result.map(item => {
        item.lsnId = this.state.lastIndex;
        this.setState({lastIndex: this.state.lastIndex + 1 });
        return item;
      });
      this.setState({
        myAppointments: [],
        myLessons: lsns
      });
    });
}



 render() {
   return (
    <main class="" id="  ">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="container">
              <SearchLessons  />
              <ListLessons lessons={this.state.myLessons} deleteLesson={this.deleteLesson} toggleAdd={this.toggleAdd} />
              <AddLessons formDisplay={this.state.formDisplay} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
};

export default App;
