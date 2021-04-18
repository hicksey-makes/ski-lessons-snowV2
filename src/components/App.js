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
      instructorName: "",
      lessonLength: "Full Day",
      orderBy: 'instructorName',
      orderDir: 'asc',
      formDisplay: false,
      lastIndex: 0
    };
    this.deleteLesson = this.deleteLesson.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.passSelections = this.passSelections.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
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

  changeOrder(quality, direction) {
      this.setState({
        orderBy: quality,
        orderDir: direction
      });
  }

  componentDidMount() {
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const lsns = result.map(item => {
        item.lsnId = this.state.lastIndex;
        this.setState({lastIndex: this.state.lastIndex + 1 });
        item.lessonDate = Date.parse(item.lessonDate);
        return item;
      });
      this.setState({
        myLessons: lsns,
      });
    });
}

  passSelections(lsn) {
    let tempTime = lsn.lsnTime;
    let tempDate = lsn.lessonDate;
    let tempInstructor = lsn.instructorName;

    this.setState({
      lessonTime: tempTime,
      lessonDate: tempDate,
      instructorName: tempInstructor
    });
  }

 render() {

   let order;
   let filteredLsns = this.state.myLessons;

   if(this.state.orderDir === 'asc') {
     order = 1;
   } else {
     order = -1;
   }

  filteredLsns.sort((a,b) => {
    if (a[this.state.orderBy] <
        b[this.state.orderBy]
    ) {
      return -1 * order;
    } else {
      return 1 * order;
    }
  });

   return (
    <main className="" id="  ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <SearchLessons orderBy={this.state.orderBy} orderDir={this.state.orderDir} changeOrder={this.changeOrder} />
              <ListLessons lessons={filteredLsns} deleteLesson={this.deleteLesson} toggleAdd={this.toggleAdd} formDisplay={this.state.formDisplay} grabTime={this.passSelections}/>
              <h6 className="text-right"><strong>Key</strong> h.d.: half day.</h6>

              <AddLessons formDisplay={this.state.formDisplay} toggleAdd={this.toggleAdd} lessonTime={this.state.lessonTime} lessonDate={this.state.lessonDate} lessonLength={this.state.lessonLength} instructorName={this.state.instructorName} setPrice={this.setPrice}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
 }
};

export default App;
