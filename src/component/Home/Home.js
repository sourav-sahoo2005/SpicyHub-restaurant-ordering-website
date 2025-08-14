import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import MostOrder from '../MostOrder/MostOrder';
import items from '../Menulist'




export default function Home() {


    return (
        <>

            <div className="homepage">
                <div className='home'>
                    <div className="intro">
                        <span id='resname'>SpicyHub,</span>
                        <p id='heading'>Make healthy
                            <br /> life with
                            <span> healthy</span>
                            <br /> food.
                        </p>
                        <p id='intro_para'>Order your favorite food on your comfort jone <br />
                            from our resturant on your location.</p>

                        <button id='order_now'>
                            <Link to="/menu" id='on_link'>Order Now</Link>
                        </button>
                    </div>
                </div>

                <p id='moi_head'>Most Ordered items</p>
                <div className='most_order_items'>
                    {items.filter(item => item.moi === 'true').map((item, index) => (
                        <MostOrder
                            key={index}
                            item={item}
                        />
                    ))}
                </div>

                <p id="os_head">Our Services</p>
                <div className='display_service'>
                    <div id='eto'><p>Easy to order</p></div>
                    <div id='lesstime'><p>Delivery within less time</p></div>
                    <div id='km'><p>Order within 5km radious</p></div>
                    <div id='cod'><p> Cash on delivery is avalable</p></div>
                    <div id='payment'><p> One step payment completed with secure transaction</p></div>
                    <div id='offer'><p>Special offers and discounts</p></div>
                    <div id='verity'><p>A wide verity of choices with detailed explaination</p></div>
                    <div id='mobpmt'><p>Integration with Mobile Payment Systems</p></div>
                </div>
            </div>
            <Footer />



        </>
    )


}
