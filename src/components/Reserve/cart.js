import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { FaRegCalendarMinus } from 'react-icons/fa';

export default function Cart(props) {
  const { cart, onLessonDelete } = props;
  const totalCart = cart.reduce((total, product) => {
    return Math.round(total + product.lessonCost * product.quantity);
  },0);

  return (<>
    <div className="pos-rel">
      <Link className="btn blendin mb-1 mt-3 ml-4" style={{width: 80 + "px"}}  to="/">Home</Link>
      <div className="mt-n5 pos-abs" style={{width: 150 + "px"}}>
        <Link className="btn btn-warning mb-3 mt-3 btn-shadow" style={{width: 90 + "px"}} to="/schedule">Schedule</Link>
      </div>
    </div>
    <h1 className="text-center">Your Cart</h1>
    {cart.length === 0 && <p className="text-center">You have not added any product to your cart yet.</p>}
    {cart.length > 0 &&
      <div className="table-responsive container">
        <table className="table table-cart table-striped table-sm">
          <thead className="table-bordered">
            <tr className=" sm-aside bg-secondary">
              <th className="text-warning col-2">Instructor</th>
              <th className="text-warning col-2">Type</th>
              <th className="text-warning col-2">Date</th>
              <th className="text-warning col-2">Price</th>
              <th className="text-info col-2">Total</th>
            </tr>
          </thead>
          <tbody>
          {cart.map(product => {
            return (
            <tr className="mt-0" id="cart-row">
              <td className="col-3 pt-3 pt-md-2 font-weight-bold">
                {/*<img width="40" height="40" alt="" src="/images/snowboard_icon_colorpow200-200.png" className="mr-1"/>*/}
                {product.instructorName}
              </td>
              <td className="col-1 pt-3 pt-md-2">{product.lsnType}</td>
              <td className="col-3 pt-3 pt-md-2 font-italic " style={{fontSize:'17px'}}>
                <pre><Moment
                date={product.lessonDate}
                format="MM-DD"
                /> <Moment
                date={product.lsnTime}
                format="hh:mm a"
                /></pre>
              </td>
              <td className="col-1 pt-3 pt-md-2">{Math.round(product.lessonCost)}x{product.quantity}</td>
              <td className="col pos-rel">
                <div className="mb-2 mb-md-0 ml-sm-2 lg-inline">
                  {Math.round(product.quantity * product.lessonCost)}
                </div>
                <button className="btn btn-sm btn-danger px-1 px-sm-2 mb-2 mt-md-0 mr-n1 ml-sm-1 ml-md-3 px-lg-3 d-block lg-inline cal-pos" onClick={() => onLessonDelete(product)}><FaRegCalendarMinus /></button>
              </td>
            </tr>)
          })}
          </tbody>
          <tfoot>
            <tr className="">
              <th className=" mr-sm-n2"></th>
              <th className=" mr-sm-n2"></th>

              <th className="cart-highlight col-1 pl-4 mx-sm-2 ml-sm-2">Total</th>
              <th className="cart-highlight col-2 pr-4" style={{fontSize: "18px"}}>${totalCart}</th>
            </tr>
          </tfoot>
        </table>
      </div>

      }
</>)
}
