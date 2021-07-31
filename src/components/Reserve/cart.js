import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function Cart(props) {
  const { cart } = props;
  const totalCart = cart.reduce((total, product) => {
    return total + product.lessonCost * product.quantity;
  },0);
  console.log(cart);

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
      <div className="container-fluid">
        <table className="table table-cart table-striped align-head no-coll">
        <thead className="table-bordered">
          <tr className="row sm-aside bg-secondary">
            <th width="20%" className="col-sm-2 th-product text-warning">Instructor</th>
            <th width="20%" className="col-sm-2 th-product text-warning">Type</th>
            <th width="20%" className="col-sm-3 th-product text-warning">Date</th>
            <th width="15%" className="col-sm-2 text-warning">Price</th>
            <th width="10%" className="col-sm-1 text-warning">Qty</th>
            <th width="15%" className="col-sm-2 text-info">Total</th>
          </tr>
        </thead>
        <tbody>
        {cart.map(product => {
          return (<tr className="row mt-0">
            <td className="font-weight-bold col-sm-2">
              {/*<img width="40" height="40" alt="" src="/images/snowboard_icon_colorpow200-200.png" className="mr-1"/>*/}
              {product.instructorName}
            </td>
            <td className="col-sm-2">{product.lsnType}</td>
          <td className="font-italic col-sm-3" style={{fontSize:'17px'}}><pre><Moment
            date={product.lessonDate}
            format="MM-DD"
          /> <Moment
            date={product.lsnTime}
            format="hh:mm a"
          /></pre></td>
        <td className="col-sm-2">{product.lessonCost}</td>
            <td className="col-sm-1">{product.quantity}</td>
            <td className="col-sm-2 text-info">
              <strong>$ {product.lessonCost * product.quantity}</strong>
            </td>
          </tr>)
        })}
        </tbody>
        <tfoot>
          <tr className="row">
            <th className="col-sm-8 mr-sm-n2"></th>
            <th className="cart-highlight col-sm-1 mx-sm-2 ml-sm-2">Total</th>
            <th className="cart-highlight col-sm-2" style={{fontSize: "18px"}}>${totalCart}</th>
          </tr>
        </tfoot>
        </table>
      </div>
      }
</>)
}
