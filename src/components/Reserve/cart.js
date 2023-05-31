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

    <h1 className="text-center mt-3 mb-3">Your Cart</h1>
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
                {<img id="pow-man" width="41" height="41" alt="" src="/images/snowboard_icon_colorpow200-200.png" className="me-1"/>}
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
              <td className="col-1 pt-3 pt-md-2">{`${Math.round(product.lessonCost)} x ${product.quantity}`}</td>
              <td className="col pos-rel pt-md-2 d-flex flex-coll justify-content-around">
                <div className="mb-2 mb-md-0 ms-3 ms-md-2">
                  {Math.round(product.quantity * product.lessonCost)}
                </div>
                <button id="thin" className="btn  btn-info pb-1 pt-0 pe-4 ps-2 px-md-2 pt-md-1 pb-md-2 mb-2 mt-md-n1 me-n1 ms-2 ms-md-3 d-block"
                onClick={() => onLessonDelete(product)}><FaRegCalendarMinus className="mt-n1" /></button>
              </td>
            </tr>)
          })}
          </tbody>
          <tfoot>
            <tr className="">
              <th className=" mr-sm-n2"></th>
              <th className=" mr-sm-n2"></th>
              <th className="cart-highlight col-1 ps-4 mx-sm-2 ms-sm-2">Total</th>
              <th className="cart-highlight col-2 pe-4" style={{fontSize: "18px"}}>${totalCart}</th>
            </tr>
          </tfoot>
        </table>
      </div>
      }
</>)
}
