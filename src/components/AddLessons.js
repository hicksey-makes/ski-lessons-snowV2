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
          <h5 className="d-inline ml-2 text-monospace">Book:</h5>
        </div>
        <div className="card-body">
          <form className="">
            <div className="form-group form-row">
              <label className="col-md-2 mt-2 text-md-right" htmlFor="riderName">Rider Name:</label>
              <div className="col-md-10">
                <input className="form-control" type="text" name="riderName" placeholder="Rider's Name" />
              </div>
            </div>
            <div className="form-group form-row mb-md-4">
              <label className="col-md-2 mt-2 text-md-right" htmlFor="lsnLength"></label>
              <div className="dropdown col-md-3 dropright">
                <button type="button" className="dropdown-toggle btn btn-info" href="#" id="lsnLength" data-toggle="dropdown">Lesson Length</button>
                <div className="dropdown-menu">
                  <button type="button" className="dropdown-item btn" href="#" id="lsnLength" value="Full Day" onClick={event => this.props.setPrice(event)}>Full Day (5 hr)</button>
                  <button type="button" className="dropdown-item btn" href="#" id="lsnLength" value="Half Day" onClick={event => this.props.setPrice(event)}>Half Day (2.5 hr)</button>
                </div>
              </div>
              <label className="col-md-2 mt-2 ml-auto text-md-right">Price:</label>
              <div className="col-md-2  mt-md-1 text-warning">
              <h4 className="">
              {(this.props.lessonLength === 'Half Day' ? '$100': '$200')}
              </h4>
              </div>
              {/*<div className="col-md-2 mt-md-2">
                $100
              </div>
              <div className="col-md-2 mt-md-2">
                $200
              </div> */}
            </div>
            <div className="form-group form-row">
              <label className="col-md-2 mt-2 text-md-right" htmlFor="lsnDate">Date:</label>
              <div className="col-md-4 mt-md-1 ">
              <mark className="p-md-1 text-danger font-weight-bold">
              <Moment
                date={this.props.lessonDate}
                format="ddd MMM DD"
              />
              </mark>
              </div>
              <label className="col-md-2 mt-2 text-md-right" htmlFor="lsnTime">Time:</label>
              <div className="col-md-4 mt-md-2">
              <mark className="p-md-1 text-danger font-weight-bold">
              <Moment
                date={this.props.lessonTime}
                format="hh:mm a"
              />
              </mark>
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-md-2 mt-2 text-md-right" htmlFor="lsnNotes">Lesson Notes:</label>
              <div className="col-md-10">
                <textarea className="form-control" rows="5" cols="50" name="lsnNotes" id="lsnNotes" placeholder="Lesson Notes" />
              </div>
            </div>
            <div className="form-group form-row">
              <div className="col-md-12">
                <button className="btn btn-primary btn-dark ml-md-auto mr-md-0 mx-auto d-block" type="submit">Reserve
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
