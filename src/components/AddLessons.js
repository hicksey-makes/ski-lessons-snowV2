import React, { Component } from 'react';

class AddLessons extends Component {
  render() {
    return (
      <div className="card mt-3">
        <div className="card-header bg-secondary text-white text-center">
          Book Lesson
        </div>
        <div className="card-body">
          <form className="">
            <div className="form-group form-row">
              <label className="col-md-2 mt-2 text-md-right" htmlFor="riderName">Rider Name:</label>
              <div className="col-md-10">
                <input className="form-control" type="text" name="riderName" placeholder="Rider's Name" />
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-md-2 mt-2 ml-auto text-md-right" htmlFor="lsnLength">Lesson Length:</label>
              <div className="col-md-2">
                <select className="form-control custom-select" id="lsnLength" name="riderName" placeholder="Rider's Name">
                  <option>Full Day</option>
                  <option>Half Day</option>
                </select>
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-md-2 mt-2 text-md-right" htmlFor="lsnDate">Date:</label>
              <div className="col-md-4">
                <input className="form-control" type="date" name="lsnDate" id="lsnDate" />
              </div>
              <label className="col-md-2 mt-2 text-md-right" htmlFor="lsnTime">Time:</label>
              <div className="col-md-4">
                <input className="form-control" type="time" name="lsnTime" id="lsnTime" />
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
                <button className="btn btn-warning ml-auto d-block" type="submit">Submit
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
