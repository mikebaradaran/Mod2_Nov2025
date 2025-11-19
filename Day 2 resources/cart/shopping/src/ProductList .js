// src/components/ProductList.js

import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
