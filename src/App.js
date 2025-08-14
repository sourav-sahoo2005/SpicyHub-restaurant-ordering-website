
import './App.css';
import Home from './component/Home/Home.js';
import Navbar from './component/Navbar/Navbar.js';
import About from './component/About/About.js';
import Menu from './component/Menu/Menu.js';
import Nopage from './component/Nopage/Nopage.js';
import Login from './component/Login/Login.js';
import Cart from './component/Cart/Cart.js';
import allItem from './component/Menulist.js'
import React, {useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Register from './component/Register/Register.js';
import Popup from './component/Popup/Popup.js';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLogin, setIsLogin] = useState(false)
  const [popup, setPopup] = useState(false)
  const [message, setMessage] = useState("");

  // add to cart
  const handleAddToCart = (item) => {

    const existingItem = cartItems.find((cart) => cart.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cart) =>
          cart.id === item.id ? { ...cart, quantity: cart.quantity + item.quantity }
            : cart
        )
      );
    }
    else {
      setCartItems([...cartItems, item])
    }

  };

  //handle quantity

  function handleQuantity() {
    allItem.forEach(element => {
      element.quantity = 1;

    });

  }

  //remove from cart
  const handleRemoveFromCart = () => {
    if(cartItems.length === 0){
      alert('Your cart already empty...')
    }else{
    alert("Are you want to clear your cart");
    handlePopup();
    popupmsg("Item removed")

    setCartItems([]);
    handleQuantity();
    }



  };

  //handle Login
  const handleLogin = (res) => {

    setIsLogin(res);


  }

  // show popup
  const handlePopup = () => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);

    }, 1500);
  }

  //popup msg
  const popupmsg = (msg) => {
    setMessage(msg);
  }

  return (
    <Router>
      {popup ? <Popup msg={message} /> : ""}
      <Navbar
        isLogin={isLogin}
        handleLogin={handleLogin}
        items={cartItems}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu
          popupmsg={popupmsg}
          onAddToCart={handleAddToCart}
          handlePopup={handlePopup}
        />} />
        <Route path="*" element={<Nopage />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} handlePopup={handlePopup} popupmsg={popupmsg} />} />
        <Route path="/register" element={<Register handlePopup={handlePopup} popupmsg={popupmsg} />} />
        <Route path="/cart" element={<Cart handleQuantity={handleQuantity} items={cartItems}  clearCart={handleRemoveFromCart} />} />
      </Routes>
    </Router>


  );
}

export default App;
