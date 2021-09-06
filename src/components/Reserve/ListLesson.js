import React, {Component} from 'react';
import Moment from 'react-moment';
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
          <div className="row bg-dark">
            <div className="col-2 col-md-1 brd">
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
            <div className="col-3 col-md-3 brd">
              <span className="board-name contrast">
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
            <div className="col-2 col-md-3 hot brd">
              {this.props.lsns.lsnType}
            </div>
            <div className="col-2 col-md-1 pl-2 label-item brd text-white text-break">
              {this.props.lsns.lessonCost}
            </div>
            <div className="col-1 col-md-2 brd">
              <button className="btn btn-sm btn-secondary px-1 px-sm-2 mr-n1 ml-sm-1 ml-md-auto mr-md-1 px-lg-3 d-block" onClick={() => {this.props.toggleAdd(); this.props.onLessonSelect(this.props.lsns)}}><FaRegCalendarCheck  /></button>
            </div>
          </div>
        </div>
    )
  }
}
export default ListLesson;
