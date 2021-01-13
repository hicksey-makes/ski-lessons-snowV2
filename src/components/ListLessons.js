import React, { Component } from 'react';
import { FaRegCalendarCheck, FaPlus } from 'react-icons/fa';
import Moment from 'react-moment';

class ListLessons extends Component {
  render() {
    const listItems = this.props.lessons.map(item => (
      <div>{item.boarderName}</div>
    ));

    return ( <>

      <div className="bg-secondary text-white text-center py-3 rounded" onClick={this.props.toggleAdd}>
        <FaPlus  />
        <div className="d-inline ml-2">Availability:</div>
      </div>
      <div className={
        'lesson-list item-list mb-3 ' +
        (this.props.formDisplay ? 'remove-lsn-list' : '')
      }>
        {this.props.lessons.map(item => (
          <div class="container board-item" key={item.lsnId}>
            <div class="row">
              <div class="col-3 col-md-4 brd">
                <span class="lsn-date">
                <Moment
                  date={item.lessonDate}
                  formate="MMM-D h:mma"
                />
                </span>
              </div>
              <div class="col-4 col-md-3 brd">
                <span class="label-item mr-2">
                Rider:
                </span>
                <span class="board-name">
                {item.boarderName}
                </span>
              </div>
              <div class="col-3 col-md-3 brd lsn-price">
                {item.lessonCost}
              </div>
              <div class="col-2 col-md-2 brd">
                <button class="btn btn-sm btn-secondary mr-3 ml-md-auto d-block" onClick={() => {this.props.deleteLesson(item); this.props.toggleAdd()}}><FaRegCalendarCheck  /></button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </>);
  }
}

export default ListLessons;
