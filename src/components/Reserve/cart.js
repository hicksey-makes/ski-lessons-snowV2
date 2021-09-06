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
      <div className="table-responsive">
        <table className="table table-cart table-striped table-sm">
        <thead className="table-bordered">
          <tr className=" sm-aside bg-secondary">
            <th width="20%" className="text-warning">Instructor</th>
            <th width="20%" className="text-warning">Type</th>
            <th width="20%" className="text-warning">Date</th>
            <th width="25%" className="text-warning">Price</th>
            <th width="15%" className="text-info">Total</th>
          </tr>
        </thead>
        <tbody>
        {cart.map(product => {
          return (
          <tr className="mt-0">
            <td className="font-weight-bold col-2">
              {/*<img width="40" height="40" alt="" src="/images/snowboard_icon_colorpow200-200.png" className="mr-1"/>*/}
              {product.instructorName}
            </td>
            <td className="col-2">{product.lsnType}</td>
            <td className="font-italic col-sm-3" style={{fontSize:'17px'}}>
              <pre><Moment
              date={product.lessonDate}
              format="MM-DD"
              /> <Moment
              date={product.lsnTime}
              format="hh:mm a"
              /></pre>
            </td>
            <td className="col-2">{Math.round(product.lessonCost)}X{product.quantity}</td>
            <td className="col-1">{product.quantity * product.lessonCost}</td>
            <td className="col-2 text-info">
              <div className="pos-rel">
                <button className="btn btn-sm btn-danger ml-4 pb-2 right-align" onClick={() => onLessonDelete(product)}><FaRegCalendarMinus /></button>
                </div>
            </td>
          </tr>)
        })}
        </tbody>
        <tfoot>
          <tr className="">
            <th className="col-8 mr-sm-n2"></th>
            <th className="cart-highlight col-1 mx-sm-2 ml-sm-2">Total</th>
            <th className="cart-highlight col-2" style={{fontSize: "18px"}}>${totalCart}</th>
          </tr>
        </tfoot>
        </table>
      </div>
      }
</>)
}
