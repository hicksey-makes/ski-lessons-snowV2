import React from 'react';
import Moment from 'react-moment';

export default function Cart(props) {
  const { cart } = props;
  const totalCart = cart.reduce((total, product) => {
    return total + product.lessonCost * product.quantity;
  },0);

  console.log(cart);

  return (<>
    <h1>Your Cart</h1>
    {cart.length === 0 && <p>You have not added any product to your cart yet.</p>}
    {cart.length > 0 &&
      <div className="container-fluid">
        <table className="table table-cart table-striped align-head">
        <thead>
          <tr className="row sm-aside">
            <th width="20%" className="col-sm-2 th-product text-primary">Instructor</th>
            <th width="20%" className="col-sm-2 th-product text-primary">Type</th>
            <th width="20%" className="col-sm-3 th-product text-primary">Date</th>
            <th width="15%" className="col-sm-2 text-primary">Price</th>
            <th width="10%" className="col-sm-1 text-primary">Qty</th>
            <th width="15%" className="col-sm-2 text-info">Total</th>
          </tr>
        </thead>
        <tbody>
        {cart.map(product => {
          return (<tr className="row">
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
