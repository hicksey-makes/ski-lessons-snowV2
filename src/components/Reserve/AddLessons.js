import React, { Component } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Moment from 'react-moment';


class AddLessons extends Component {
  render() {
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
                <input onChange={event => this.props.onRiderAdd(event)} className="form-control" type="text" name="riderName" placeholder="Rider's Name" />
              </div>
              <label className="col-md-2 mt-2 text-md-right" htmlFor="lsnLength">Instructor:</label>
              <h5 className="col-md-3 mt-0 mt-md-2  font-weight-light font-italic text-primary">
                {this.props.selectedLsn.instructorName}
              </h5>
            </div>
            <div className="form-group form-row mb-md-5 mb-1">
              <label className="col-md-1 ml-4 mt-0 mt-md-2 text-md-right" htmlFor="lsnType">Type:</label>
              <h5 className="col-md-3 mt-0 mt-md-2 font-weight-light font-italic text-primary">
                {this.props.selectedLsn.lsnType}
              </h5>

                <button type="button" className="btn btn-warning add-btn col-md-2 mb-2 mt-5 mt-md-1" disabled={this.props.lessonLength === "Full Day"} active={this.props.lessonLength === "Full Day"} href="#" id="lsnLength" value="Full Day" onClick={event => this.props.setPrice(event)}>Full Day (5 hr)</button>
                <button type="button" className="btn btn-warning add-btn col-md-2 mb-2 mt-5 mt-md-1 ml-1" disabled={this.props.lessonLength === "Half Day"} active={this.props.lessonLength === "Half Day"} href="#" id="lsnLength" value="Half Day" onClick={(event) => this.props.setPrice2(event)}>Half Day (2.5 hr)</button>

              <label className="col-md-1 mt-3 mt-md-2 ml-4 text-md-right">Price:</label>
              <div className="col-md-2  mt-md-2 text-dark">
              <h5 className="font-weight-light font-italic text-primary">
              $ {this.props.selectedLsn.lessonCost}
              </h5>
              </div>
            </div>
            <div className="form-group form-row mb-md-5">
              <label className="col-md-2 mt-2 mt-md-0 text-md-right" htmlFor="lsnDate">Date:</label>
            <div className="col-md-4 mt-md-0 ">
              <mark className="p-md-1 text-danger font-weight-bold">
              <Moment
                date={this.props.selectedLsn.lessonDate}
                format="ddd MMM DD"
              />
              </mark>
              </div>
              <label className="col-md-2 mt-3 mt-md-0 text-md-right" htmlFor="lsnTime">Time:</label>
            <div className="col-md-4 mt-md-0">
              <mark className="p-md-1 text-danger font-weight-bold">
              <Moment
                date={this.props.selectedLsn.lsnTime}
                format="hh:mm a"
              />
              </mark>
              </div>
            </div>
            <div className="form-group form-row ">
              <label className="col-md-2 mt-2 mt-md-0 ml-5 mb-3" htmlFor="lsnNotes">Lesson Notes:</label>
              <div className="col-md-8 mb-2 mb-md-0">
                <textarea className="form-control" rows="5" cols="50" name="lsnNotes" id="lsnNotes" placeholder="Lesson Notes" />
              </div>
            </div>
            <div className="form-group form-row">
              <div className="col-md-12">

              </div>
            </div>

          </form>
          <button className="btn btn-primary btn-primary ml-md-auto mr-md-0 mx-auto d-block" type="submit" onClick={() => {this.props.toggleAdd(); this.props.onLessonAdd(this.props.selectedLsn); }}>Reserve
          </button>
        </div>
      </div>
    );
  }
}

export default AddLessons;
