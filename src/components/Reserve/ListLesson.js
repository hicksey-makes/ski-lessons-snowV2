import React, {Component} from 'react';
// import Moment from 'react-moment';
import { FaRegCalendarCheck } from 'react-icons/fa';

class ListLesson extends Component {

  render() {
    let quantity = 0;
    console.log(this.props.cart);
    this.props.cart.map(product => {
      if (product.lsnId === this.props.lsns.lsnId) {
        quantity += product.quantity;
      }
      return quantity;
    });

    return (
        <div className="container board-item" key={this.props.lsns.lsnId}>
          <div className="row lsn-row bg-dark bg-gradient pb-1 pt-md-3 pb-md-3 pb-lg-4">
            <div className="text-white lsn-date pos-rel brd col-3 col-md-3 pt-md-3">
              {`${((new Date(this.props.lsns.lsnTime)).toDateString()).substring(3,10)}`}
              <div className="time-pos">
                {`${((new Date(this.props.lsns.lsnTime)).toTimeString()).substring(0,5)}am`}
              </div>
            </div>
            <div className="push-r brd vert-c col-4 col-md-3 pt-md-3" id="iName">
              <span className="bulk contrast">
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
            <div className="push-r hot brd bulk type-pos vert-c col-3 col-md-3 pt-md-3">
              {this.props.lsns.lsnType}
            </div>
            <div className="label-item brd text-white pos-rel col-2 col-md-3 pt-md-3 ">
              <div className="push-r mb-2 mb-md-1 ms-1 ms-sm-2">
                {this.props.lsns.lessonCost}
              </div>
              <button className="btn btn-sm btn-warning cal-pos d-block text-black text-opacity-75 pb-2 py-md-2 px-sm-2 px-lg-3" onClick={() => {this.props.toggleAdd(); this.props.onLessonSelect(this.props.lsns)}}>
                <FaRegCalendarCheck />
              </button>
            </div>

          </div>
        </div>
    )
  }
}
export default ListLesson;
