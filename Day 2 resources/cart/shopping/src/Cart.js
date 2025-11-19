// src/components/Cart.js

import React from 'react';

function Cart(props) {
  return (
    <div>
      <h2>Cart</h2>
      {props.cartItems.length === 0 ? (<p>Your cart is empty</p>) :
        (
          <table border="1">
            <tr>
              <th>Quantity</th>
              <th>Name</th>
              <th>price</th>
            </tr>
            {props.cartItems.map((item, index) =>
              <tr key={index}>
                <td>{item.quantity}</td>
                <td>{item.product.name}</td>
                <td>£{item.product.price.toFixed(2)}</td>
              </tr>
            )}
          </table>
        )}
    </div>
  )}

  export default Cart;
