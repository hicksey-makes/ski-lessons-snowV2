import React, { Component } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ListLesson from './ListLesson.js';

class ListLessons extends Component {
  render() {
    return ( <>
      <div className="bg-secondary text-white text-center py-3 rounded" onClick={this.props.toggleAdd}>
        <span className={(this.props.formDisplay ? '' : 'show-hide')}>
        <FaPlus  />
        </span>
        <span className={(this.props.formDisplay ? 'show-hide' : '')}>
        <FaMinus  />
        </span>
        <h6 className="d-inline ml-2 text-monospace">Availability:</h6>
      </div>
      <div className={
        'lesson-list item-list mb-3 ' +
        (this.props.formDisplay ? 'remove-lsn-list' : '')
      }>
      <div className="container">
          <table className="table table-bordered mt-2 mb-n3">
            <thead>
              <tr className="table-active row">
                <th className="col-2 col-md-2">Date</th>
                <th className="col-2 col-md-2">Time</th>
                <th className="col-3 col-md-3">Instructor</th>
                <th className="col-2 col-md-2">Type</th>
                <th className="col-3 col-md-3">Price($)</th>
              </tr>
            </thead>
          </table>
      </div>
        {this.props.lessons.map(item => {
          return <ListLesson  key={item.lsnId} lsns={item} toggleAdd={this.props.toggleAdd} reserveLsn={this.props.reserveLsn} onLessonSelect={this.props.onLessonSelect} lessonLength={this.props.lessonLength} cart={this.props.cart} />
        })}
      </div>
    </>);
  }
}

export default ListLessons;
