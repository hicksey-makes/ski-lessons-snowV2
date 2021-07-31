import React, {Component} from 'react';
import Moment from 'react-moment';
import { FaRegCalendarCheck } from 'react-icons/fa';

class ListLesson extends Component {

  render() {
    let quantity = 0;
    const existingLesson = this.props.reserved.find(lesson => {
      return lesson.lsnId === this.props.lsns.lsnId;
    });

    if (existingLesson) {
      quantity = existingLesson.quantity;
    } else {
      quantity = 0;
    }

    return (
        <div className="container board-item" key={this.props.lsns.lsnId}>
          <div className="row bg-dark">
            <div className="col-2 col-md-2 brd">
              <span className="lsn-date text-white">
              <Moment
                date={this.props.lsns.lessonDate}
                format="MM-DD"
              />
              </span>
            </div>
            <div className="col-2 col-md-2 brd">
              <span className="lsn-date text-white">
              <Moment
                date={this.props.lsns.lsnTime}
                format="hh:mm a"
              />
              </span>
            </div>
            <div className="col-2 col-md-3 brd">
              <span className="board-name text-primary">
              {this.props.lsns.instructorName}
              </span>
              {quantity > 0 &&
                <div className="lesson-quantity-container " id="sphere">
                  <div className="lesson-quantity bg-info">
                    {quantity}
                  </div>
                </div>
              }
            </div>
            <div className="col-3 col-md-2 text-white brd">
              {this.props.lsns.lsnType}
            </div>
            <div className="col-2 col-md-1 label-item brd lsn-price text-info text-break">
              {this.props.lsns.lessonCost}
            </div>
            <div className="col-1 col-md-1 brd">
              <button className="btn btn-sm btn-success px-2 mr-2 ml-n2 mr-md-n4 ml-md-auto px-lg-3 mr-lg-n2 d-block" onClick={() => {this.props.toggleAdd(); this.props.onLessonSelect(this.props.lsns)}}><FaRegCalendarCheck  /></button>
            </div>
          </div>
        </div>
    )
  }
}
export default ListLesson;
