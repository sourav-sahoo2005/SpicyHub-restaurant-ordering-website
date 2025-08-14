import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer className='footer'>
                <div className='footer_content'>
                    <span id='footer_res_name'>SpicyHub</span>
                    <p>&copy; 2025 SpicyHub</p>
                    <p id='footer_heading'>Follow us on:</p>
                    <ul className='social_links'>
                        <li><a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
                        <li><a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
                        <li><a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a></li>
                    </ul>
                </div>
                <div className='footer_links'>
                    <p id='footer_heading'>Navigate on:</p>
                    <ul>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                    </ul>
                </div>
                <div className='footer_contact'>
                    <p id='footer_heading'>Contact us at:</p>
                    <p>Email : spicyhub@gmail.com</p>
                    <p>Phone : +91 9348121330</p>
                    <p>Address : Jamalpur By-pass NH-60,Jaleswar</p>
                </div>




            </footer>

        </div>
    )
}
