// src/App.js

import "./App.css";
import React, { useState } from 'react';
import ProductList from './ProductList ';
import Cart from './Cart';
import UserDetailsForm from './UserDetailsForm';

function CartManager() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    function addToCart(product) {
        var found = false;

        for (let item of cartItems) {
            if (item.product.id === product.id) {
                found = true;
                item.quantity++;
            }
        }
        if (!found)
            setCartItems([...cartItems, { "product": product, "quantity": 1 }]);
        setTotalPrice(totalPrice + product.price);
    }

    function removeOneFromCart(product) {
        for (let item of cartItems) {
            if (item.product.id === product.id) {
                item.quantity--;
                setTotalPrice(totalPrice - product.price);
                if (item.quantity === 0) {
                    var newCartItems = cartItems.filter((item) => {
                        return item.product.id !== product.id;
                    });
                    setCartItems(newCartItems);
                }
                break;
            }
        }
    };

    return (
        <>
            <ProductList addToCart={addToCart} />
            <Cart cartItems={cartItems} removeOneFromCart={removeOneFromCart} />
            <h3>Total price: £{totalPrice.toFixed(2)}</h3>
        </>
    );
}

export default CartManager;

//   let x = cartItems.find(item => item.product.id == product.id);
//   if(x === undefined)
//     setCartItems([...cartItems, { "product": product, "quantity": 1 }]);
//   else{
//     x.quantity++;
//     setCartItems([...cartItems]); // force redraw
//   }
// }
