import React from 'react'
import './Menuitems.css';
export default function Menuitems({onAddToCart, item , handlePopup,popupmsg }) {


    function handleAddtocart(){
        popupmsg("added sucessfully")
        onAddToCart(item);
        handlePopup();
    }

    
    return (

        <div className='item'>
            <img className='item_image' src={item.imgurl} alt={item.name} />
            <span className='item_name'>{item.name}</span>
            <p className='item_desc'>{item.desc.slice(0,60)+"..."}</p>
            <div className="item_price_info">
                <div>
                     <p className='item_price'>Price : {item.price}/-</p>
                     <p id='quantity'>Quantity : {item.quantity} </p>
                </div>
           
            <div className="no_of_items">
               <p id="ratting" style={{fontSize:"14px"}}><span style={{color:'#ff8300',fontSize:"16px"}}>{item.ratting}</span></p>
            </div>
            </div>
            <button id='item_btn'onClick={handleAddtocart}>add to cart</button>
        </div>

    )
}
