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
      lessonTime: "",
      lessonDate: "",
      lessonLength: "Full Day",
      formDisplay: false,
      lastIndex: 0
    };
    this.deleteLesson = this.deleteLesson.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.grabTime = this.grabTime.bind(this);
    this.setPrice = this.setPrice.bind(this);
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

  setPrice(event) {
    console.log(event.target.value);
    this.setState({
      lessonLength: event.target.value
    });
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

  grabTime(lsn) {
    let tempTime = lsn.lsnTime;
    let tempDate = lsn.lessonDate;
    this.setState({
      lessonTime: tempTime,
      lessonDate: tempDate
    })
  }

 render() {
   return (
    <main class="" id="  ">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="container">
              <SearchLessons  />
              <ListLessons lessons={this.state.myLessons} deleteLesson={this.deleteLesson} toggleAdd={this.toggleAdd} formDisplay={this.state.formDisplay} grabTime={this.grabTime}/>
              <AddLessons formDisplay={this.state.formDisplay} toggleAdd={this.toggleAdd} lessonTime={this.state.lessonTime} lessonDate={this.state.lessonDate} lessonLength={this.state.lessonLength} setPrice={this.setPrice}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
};

export default App;
