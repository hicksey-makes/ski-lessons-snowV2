import React, {Component} from 'react';
import '../../css/Schedule.css';
import AddLessons from './AddLessons.js';
import SearchLessons from './SearchLessons.js';
import ListLessons from './ListLessons.js';
import {Link} from 'react-router-dom';
import "../../css/weather-icons.css";
import Snow from './snow.js';

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      myLessons: [],
      riderName: "",
      lessonLength: "Half Day",
      lessonNotes: "",
      orderBy: 'lsnTime',
      orderDir: 'asc',
      queryText: "",
      formDisplay: false,
      lastIndex: 0,
      selectedLsn: {}
    };
    this.toggleAdd = this.toggleAdd.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleRiderAdd = this.handleRiderAdd.bind(this);
    this.setFullPrice = this.setFullPrice.bind(this);
    this.setHalfPrice = this.setHalfPrice.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchLsns = this.searchLsns.bind(this);
    this.handleLessonSelect = this.handleLessonSelect.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
  }

  componentDidMount() {
    fetch('../lessons_details.json')
    .then(response => response.json())
    .then(result => {
      console.log(result);
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

  searchLsns(query) {
    this.setState({
      queryText: query
    });
  }

  changeOrder(quality, direction) {
      this.setState({
        orderBy: quality,
        orderDir: direction
      });
  }

  hideForm() {
    this.setState({
      formDisplay: false
    });
  }

  handleLessonSelect(lsn) {
    this.setState({
      selectedLsn: lsn,
      lessonLength: "Half Day"
    });
  }

  toggleAdd() {
    this.setState({
      formDisplay: !this.state.formDisplay,

      riderName: "",
      lessonNotes: ""
    });
  }

  setFullPrice(event) {
    this.setState({
      lessonLength: event.target.value
    });
    let newLesson = {...this.state.selectedLsn, lessonCost: this.state.selectedLsn.lessonCost * 1.75};
    this.setState({
      selectedLsn: newLesson
    });
  }

  setHalfPrice(event) {
    this.setState({
      lessonLength: event.target.value
    });
    let newLesson = {...this.state.selectedLsn, lessonCost: this.state.selectedLsn.lessonCost/1.75};
    this.setState({
      selectedLsn: newLesson
    });
  }

  handleRiderAdd(event) {
    let newLesson = {...this.state.selectedLsn, riderName: event.target.value};
    this.setState({
      riderName: event.target.value,
      selectedLsn: newLesson
    });
  }

  handleNotesChange(event) {
    let newLesson = {...this.state.selectedLsn, lessonNotes: event.target.value};
    this.setState({
      lessonNotes: event.target.value,
      selectedLsn: newLesson
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      lessonLength: 'Half Day',
      riderName: "",
      lessonNotes: "",
      selectedLsn: {}
    });
  }

 render() {
   let order;
   let filteredLsns = this.state.myLessons;
   // console.log(filteredLsns);
   if(this.state.orderDir === 'asc') {
     order = 1;
   } else {
     order = -1;
   }

  filteredLsns = filteredLsns.sort((a,b) => {
    if (a[this.state.orderBy] <
        b[this.state.orderBy]
    ) {
      return -1 * order;
    } else {
      return 1 * order;
    }
  }).filter(eachItem => {
    return (
      eachItem['instructorName']
      .toLowerCase()
      .includes(this.state.queryText.toLowerCase()) ||
      eachItem['lsnTime']
      .toLowerCase()
      .includes(this.state.queryText.toLowerCase()) ||
      eachItem['lessonCost'] == this.state.queryText
    )
  });
  let quantity = 0;
  this.props.cart.forEach(lesson => {
    return quantity += lesson.quantity;
  })


   return (<>


     <div id="snow">
      <Snow  />
     </div>

        <main className="" id="  ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="container">
                  <p className="hint text-center text-monospace mt-1 small text-dark mb-n2">search by date: YYYY-M-D H:M; instructor; price</p>
                  <SearchLessons searchLsns={this.searchLsns} orderBy={this.state.orderBy} orderDir={this.state.orderDir} changeOrder={this.changeOrder} hideForm={this.hideForm} />

                  <ListLessons lessonLength={this.state.lessonLength} onLessonSelect={this.handleLessonSelect} lessons={filteredLsns} toggleAdd={this.toggleAdd} formDisplay={this.state.formDisplay} onProductDelete={this.props.onProductDelete} cart={this.props.cart}/>

                  <AddLessons onNotesChange={this.handleNotesChange} lessonNotes={this.state.lessonNotes} riderName={this.state.riderName} onRiderAdd={this.handleRiderAdd} onFormSubmit={this.handleFormSubmit} onLessonAdd={this.props.onLessonAdd} selectedLsn={this.state.selectedLsn} formDisplay={this.state.formDisplay} toggleAdd={this.toggleAdd} lessonLength={this.state.lessonLength} setFullPrice={this.setFullPrice} setHalfPrice={this.setHalfPrice} />

                </div>
              </div>
            </div>
          </div>
        </main>
      </>)
 }
};

export default Schedule;
