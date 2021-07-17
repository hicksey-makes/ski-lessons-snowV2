import React, {Component} from 'react';
import '../../css/Schedule.css';
import AddLessons from './AddLessons.js';
import SearchLessons from './SearchLessons.js';
import ListLessons from './ListLessons.js';
import { without } from 'lodash';
import {Link} from 'react-router-dom';

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      myLessons: [],
      lessonTime: "",
      lessonDate: "",
      instructorName: "",
      lessonType: "",
      lessonLength: "Full Day",
      orderBy: 'instructorName',
      orderDir: 'asc',
      queryText: "",
      formDisplay: false,
      lastIndex: 0,
      selectedLsn: {}
    };
    this.toggleAdd = this.toggleAdd.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.reserveLesson = this.reserveLesson.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchLsns = this.searchLsns.bind(this);
    this.handleLessonSelect = this.handleLessonSelect.bind(this);
  }

  componentDidMount() {
    fetch('../data.json')
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
    })
  }

  handleLessonSelect(lsn) {
    this.setState({
      selectedLsn: lsn
    });
  }

  toggleAdd() {
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  reserveLesson(lsn) {
    let tempTime = lsn.lsnTime;
    let tempDate = lsn.lessonDate;
    let tempInstructor = lsn.instructorName;
    let tempType = lsn.lsnType;

    this.setState({
      lessonTime: tempTime,
      lessonDate: tempDate,
      instructorName: tempInstructor,
      lessonType: tempType
    });
  }

  setPrice(event) {
    this.setState({
      lessonLength: event.target.value
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
      eachItem['lessonCost']
      .toLowerCase()
      .includes(this.state.queryText.toLowerCase())
    )
  });

   return (<>
     <Link className="btn blendin mb-1 mt-3 ml-4" style={{width: 80 + "px"}}  to="/">Home</Link>
     <div className="d-block ml-auto mt-n5" style={{width: 150 + "px"}}>
        <Link className="btn btn-warning text-white mt-1" style={{width: 80 + "px"}} to="/cart/">Cart</Link>
     </div>
      <main className="" id="  ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <SearchLessons searchLsns={this.searchLsns} orderBy={this.state.orderBy} orderDir={this.state.orderDir} changeOrder={this.changeOrder} hideForm={this.hideForm} />

                <ListLessons onLessonSelect={this.handleLessonSelect} lessons={filteredLsns} toggleAdd={this.toggleAdd} formDisplay={this.state.formDisplay} reserveLsn={this.reserveLesson} onProductDelete={this.props.onProductDelete} cart={this.props.cart}/>

                <h6 className="text-right"><strong>Key</strong> h.d.: half day.</h6>

                <AddLessons onLessonAdd={this.props.onLessonAdd} selectedLsn={this.state.selectedLsn} lessons={filteredLsns} formDisplay={this.state.formDisplay} toggleAdd={this.toggleAdd} lessonTime={this.state.lessonTime} lessonType={this.state.lessonType} lessonDate={this.state.lessonDate} lessonLength={this.state.lessonLength} instructorName={this.state.instructorName} setPrice={this.setPrice} cart={this.props.cart}/>
              </div>
            </div>
          </div>
        </div>
      </main>
  </>);
 }
};

export default Schedule;
