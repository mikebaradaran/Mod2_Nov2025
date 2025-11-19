// src/App.js

import React, { useState } from 'react';
import ProductList from './ProductList ';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 12.99 },
    { id: 3, name: 'Product 3', price: 15.99 },
  ];

  const addToCart = (product) => {
    //   let x = cartItems.find(item => item.product.id == product.id);
    //   if(x === undefined)
    //     setCartItems([...cartItems, { "product": product, "quantity": 1 }]);
    //   else{
    //     x.quantity++;
    //     setCartItems([...cartItems]); // force redraw
    //   }
    // }
    var found = false;

    for (let item of cartItems) {
      if (item.product.id == product.id) {
        found = true;
        item.quantity++;
        // setCartItems([...cartItems]);
      }
    }
    if (!found)
      setCartItems([...cartItems, { "product": product, "quantity": 1 }]);
    setTotalPrice(totalPrice + product.price);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
      <h3>Total price: {totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default App;
