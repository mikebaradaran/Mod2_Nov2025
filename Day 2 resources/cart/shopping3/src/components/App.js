// src/App.js

import "./App.css";
import React, { useState } from 'react';
import UserDetailsForm from './UserDetailsForm';
import CartManager from "./CartManager";

function App() {

    const [isShown, setIsShown] = useState(false);
    
    return (
      <>
        {!isShown && <CartManager /> }
        <div>
          <button onClick={() => setIsShown(!isShown)}> {isShown ? 'Back' : 'Pay'}</button>
          {isShown && <UserDetailsForm />}
        </div>
      </>
    );
  }

  export default App;

//   let x = cartItems.find(item => item.product.id == product.id);
//   if(x === undefined)
//     setCartItems([...cartItems, { "product": product, "quantity": 1 }]);
//   else{
//     x.quantity++;
//     setCartItems([...cartItems]); // force redraw
//   }
// }
