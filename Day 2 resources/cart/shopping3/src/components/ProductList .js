// src/components/ProductList.js

import React from 'react';
import products from "../products.json";

function ProductList({ addToCart }) {

  return (
    <>
      <h2>Products</h2>
      <table className="table table-hover" style={{ width: '50%' }}>
        <thead class="table-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>£{product.price.toFixed(2)}</td>
            <td><button onClick={() => addToCart(product)}>Buy</button></td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default ProductList;
