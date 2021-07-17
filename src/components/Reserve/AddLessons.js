import React, { Component } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

class AddLessons extends Component {
  render() {
    console.log(this.props.selectedLsn);
    return (

      <div className={
        'card textcenter mt-3 ' +
        (this.props.formDisplay ? '' : 'add-lesson')
      }>
        <div className="card-header bg-secondary text-white text-center py-3" onClick={this.props.toggleAdd}>
          <span className={(this.props.formDisplay ? 'show-hide' : '')}>
          <FaPlus  />
          </span>
          <span className={(this.props.formDisplay ? '' : 'show-hide')}>
          <FaMinus  />
          </span>
          <h6 className="d-inline ml-2 text-monospace">Book:</h6>
        </div>
        <div className="card-body">
          <form className="">
            <div className="form-group form-row mb-md-5">
              <label className="col-md-2 mt-2 text-md-right" htmlFor="riderName">Rider Name:</label>
              <div className="col-md-5 mt-2 mt-md-0 mb-2">
                <input className="form-control" type="text" name="riderName" placeholder="Rider's Name" />
              </div>
              <label className="col-md-2 mt-2 text-md-right" htmlFor="lsnLength">Instructor:</label>
              <h5 className="col-md-3 mt-0 mt-md-2  font-weight-light font-italic text-primary">
                {this.props.instructorName}
              </h5>
            </div>
            <div className="form-group form-row mb-md-5 mb-1">
              <label className="col-md-2 mt-0 mt-md-2 text-md-right" htmlFor="lsnType">Type:</label>
              <h5 className="col-md-4 mt-0 mt-md-2 font-weight-light font-italic text-primary">
                {this.props.lessonType}
              </h5>
              <div className="dropdown col-md-1 dropleft mb-2 mt-4 mt-md-1">
                <button type="button" className="dropdown-toggle btn btn-warning" href="#" id="lsnLength" data-toggle="dropdown">Lesson Length</button>
                <div className="dropdown-menu">
                  <button type="button" className="dropdown-item btn" href="#" id="lsnLength" value="Full Day" onClick={event => this.props.setPrice(event)}>Full Day (5 hr)</button>
                  <button type="button" className="dropdown-item btn" href="#" id="lsnLength" value="Half Day" onClick={event => this.props.setPrice(event)}>Half Day (2.5 hr)</button>
                </div>
              </div>
              <label className="col-md-2 mt-3 mt-md-2 ml-auto text-md-right">Price:</label>
              <div className="col-md-2  mt-md-2 text-dark">
              <h5 className="font-weight-light font-italic text-primary">
              {(this.props.lessonLength === 'Half Day' ? '$100': '$175')}
              </h5>
              </div>
            </div>
            <div className="form-group form-row mb-md-5">
              <label className="col-md-2 mt-2 mt-md-0 text-md-right" htmlFor="lsnDate">Date:</label>
            <div className="col-md-4 mt-md-0 ">
              <mark className="p-md-1 text-danger font-weight-bold">
              <Moment
                date={this.props.lessonDate}
                format="ddd MMM DD"
              />
              </mark>
              </div>
              <label className="col-md-2 mt-3 mt-md-0 text-md-right" htmlFor="lsnTime">Time:</label>
            <div className="col-md-4 mt-md-0">
              <mark className="p-md-1 text-danger font-weight-bold">
              <Moment
                date={this.props.lessonTime}
                format="hh:mm a"
              />
              </mark>
              </div>
            </div>
            <div className="form-group form-row ">
              <label className="col-md-2 mt-2 mt-md-0 text-md-right mb-3" htmlFor="lsnNotes">Lesson Notes:</label>
              <div className="col-md-10 mb-2 mb-md-0">
                <textarea className="form-control" rows="5" cols="50" name="lsnNotes" id="lsnNotes" placeholder="Lesson Notes" />
              </div>
            </div>
            <div className="form-group form-row">
              <div className="col-md-12">
                <button className="btn btn-primary btn-primary ml-md-auto mr-md-0 mx-auto d-block" onClick={() => {this.props.toggleAdd(); this.props.onProductAdd(this.props.selectedLsn)}} type="submit">Reserve
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default AddLessons;
