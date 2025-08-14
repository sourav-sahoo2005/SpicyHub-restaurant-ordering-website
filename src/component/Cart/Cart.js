import React from 'react'
import { Link } from 'react-router-dom';
import './Cart.css'; 
import Footer from '../Footer/Footer.js'

export default function Cart({ items, clearCart , handleQuantity}) {

    function handleCheckout() {
        alert('it is the backend part but this project is a frontend project')

        handleQuantity();
        
        

    }


    return (
        <>
            <div className='cart'>
                <h2>Your Cart</h2>
                {items.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul className='cart_items'>
                        {items.map((item, index) => (
                            <li key={index} className='cart_item'>
                                <img src={item.imgurl} alt={item.name} />
                                <div id='itemNameQunt'>
                                    <span>{item.name}</span>
                                <p> {"Quantity:"+item.quantity}</p>
                                </div>
                                <span id='cart_item_price'>{item.price*item.quantity}/-</span>
                            </li>
                        ))}
                    </ul>
                )}
                {items.length > 0 && (
                    <div className='cart_total'>
                        <span>Total: </span>
                        <span id='total_price'>
                            {items.reduce((total, item) => total + item.price*item.quantity, 0)}/-
                        </span>
                    </div>
                )}
                
                <div className='cart_buttons'>
                    <button className='clear_cart_btn' onClick={clearCart}>Clear Cart</button>
                    <button className='checkout_btn' onClick={handleCheckout}>Checkout</button>
                    <button className='continue_shopping_btn'> <Link to="/menu">Continue Shopping</Link></button>
                </div>



            </div>
            
            <Footer/>
        </>
    )
}
