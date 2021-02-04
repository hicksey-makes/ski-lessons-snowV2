import React, { Component } from 'react';
import { FaRegCalendarCheck, FaPlus, FaMinus } from 'react-icons/fa';
import Moment from 'react-moment';

class ListLessons extends Component {
  render() {
    const listItems = this.props.lessons.map(item => (
      <div>{item.boarderName}</div>
    ));

    return ( <>

      <div className="bg-secondary text-white text-center py-3 rounded" onClick={this.props.toggleAdd}>
        <span className={(this.props.formDisplay ? '' : 'show-hide')}>
        <FaPlus  />
        </span>
        <span className={(this.props.formDisplay ? 'show-hide' : '')}>
        <FaMinus  />
        </span>
        <h5 className="d-inline ml-2 text-monospace">Availability:</h5>
      </div>
      <div className={
        'lesson-list item-list mb-3 ' +
        (this.props.formDisplay ? 'remove-lsn-list' : '')
      }>
        {this.props.lessons.map(item => (
          <div class="container board-item" key={item.lsnId}>
            <div class="row bg-dark">
              <div class="col-1 col-md-2 brd">
                <span class="lsn-date text-white">
                <Moment
                  date={item.lessonDate}
                  format="MM-DD"
                />
                </span>
              </div>
              <div class="col-2 col-md-2 brd">
                <span class="lsn-date text-white">
                <Moment
                  date={item.lsnTime}
                  format="hh:mm a"
                />
                </span>
              </div>
              <div class="col-4 col-md-3 brd">
                <span class="label-item mr-2">
                Instructor:
                </span>
                <span class="board-name text-white">
                {item.instructorName}
                </span>
              </div>
              <div class="col-3 col-md-3 label-item brd lsn-price text-info">
                {item.lessonCost}
              </div>
              <div class="col-2 col-md-2 brd">
                <button class="btn btn-sm btn-secondary mr-3 ml-md-auto d-block" onClick={() => {this.props.deleteLesson(item); this.props.toggleAdd(); this.props.grabTime(item)}}><FaRegCalendarCheck  /></button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </>);
  }
}

export default ListLessons;
