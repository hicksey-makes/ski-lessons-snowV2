import React from 'react';

export default function Cart(props) {
  const { cart } = props;
  const totalCart = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  },0);

  return (<>
    <h1>Your Cart</h1>
    {cart.length === 0 && <p>You have not added any product to your cart yet.</p>}
    {cart.length > 0 && <table className="table table-cart">
      <thead>
        <tr>
          <th width="25%" className="th-product">Product</th>
          <th width="20%">Unit price</th>
          <th width="10%">Quanity</th>
          <th width="25%">Total</th>
        </tr>
      </thead>
      <tbody>
      {cart.map(product => {
        return (<tr>
          <td>
            <img width="30" height="30" alt="" />
            NAME
          </td>
          <td>${product.price}</td>
          <td>{product.quantity}</td>
          <td>
            <strong>${product.quantity * product.price}</strong>
          </td>
        </tr>)
      })}

      </tbody>
      <tfoot>
        <tr>
          <th colSpan="2"></th>
          <th className="cart-highlight">Total</th>
          <th className="cart-highlight">${totalCart}</th>
        </tr>
      </tfoot>
</table>}
</>)
}
