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
          <div className="row bg-dark pt-md-3 pb-md-3 pb-lg-4">
            <div className="col-3 col-md-3 brd pt-md-3  text-white lsn-date pos-rel">

            {`${((new Date(this.props.lsns.lsnTime)).toDateString()).substring(3,10)}`}
            <div className="time-pos">
              {`${((new Date(this.props.lsns.lsnTime)).toTimeString()).substring(0,5)}am`}
            </div>
            </div>
            <div className="col-4 col-md-3 brd pt-4 pt-md-3">
              <span className="board-name bulk contrast">
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
            <div className="col-3 col-md-3 hot brd bulk type-pos pt-4 pt-md-3">
              {this.props.lsns.lsnType}
            </div>
            <div className="col-2 col-md-3 pl-2 label-item brd text-white text-break pos-rel">
              <div className="mt-n2 mb-2 mb-md-0 lg-inline ml-1 ml-sm-2 ml-md-3 mr-md-4">
                {this.props.lsns.lessonCost}
              </div>
              <button className="btn btn-sm btn-warning px-sm-2 mt-md-0 mr-n1 ml-sm-1 ml-md-5 px-md-3 d-block lg-inline cal-pos" id="" onClick={() => {this.props.toggleAdd(); this.props.onLessonSelect(this.props.lsns)}}><FaRegCalendarCheck className="mt-n1"/></button>
            </div>

          </div>
        </div>
    )
  }
}
export default ListLesson;
