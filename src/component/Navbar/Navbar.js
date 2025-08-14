import React, { useState, useEffect } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({ isLogin, handleLogin,items }) {

    const accountdetails = document.getElementById('account_info')
    const storedData = JSON.parse(localStorage.getItem('user'));
    const [activeLink, setActiveLink] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function accountInformationOpen() {
        accountdetails.style.display = 'flex';
    }

    function accountInfoClose() {
        accountdetails.style.display = 'none'
    }

    function logOut(){
        handleLogin(false);
        accountInfoClose();

    }




    return (
        <>
            <div className='navbar' id={isScrolled ? 'scrolled' : ''}>
                <div className='nav_left'>
                    <div><Link to="/" id='logo'>SpicyHub</Link></div>
                </div>
                <div className='nav_rout'>
                    <ul>
                        <li onClick={() => setActiveLink('home')} className={activeLink === "home" ? "active" : ""}><Link to="/" style={isScrolled ? { color: "black" } : {}}>Home</Link></li>
                        <li onClick={() => setActiveLink('about')} className={activeLink === "about" ? "active" : ""}> <Link to="/about" style={isScrolled ? { color: "black" } : {}}>About</Link> </li>
                        <li onClick={() => setActiveLink('menu')} className={activeLink === "menu" ? "active" : ""}> <Link to="/menu" style={isScrolled ? { color: "black" } : {}}>Menu</Link></li>
                    </ul>
                </div>
                <div className='nav_right'>
                    <Link to='/cart' id="cart" style={isScrolled ? { filter: "none" } : {}}>
                        <span id="badge" style={isScrolled ? { filter: "none" } : {}}> {items.reduce((total, item) => total + item.quantity, 0)}</span>


                    </Link>
                    {isLogin === false ? (
                        <button id='signup'><Link to="/login">sign up</Link></button>
                    ) : (

                        <button className='account' onClick={accountInformationOpen}></button>

                    )
                    }
                </div>
            </div>
            <div id="account_info">
                <div id="account_img"></div>
                <p id="account_name">Name : {isLogin?storedData.name:""}</p>
                <p id="mobNo">Mob : {isLogin?storedData.mob:""}</p>
                <p id="address">Address : {isLogin?storedData.address:""},<span id="pin">{isLogin?storedData.pin:""}</span></p>
                <Link to="/cart" onClick={accountInfoClose}>your Cart</Link>
                <div className="account_info_btn">
                    <button onClick={logOut}>Sign out</button>
                    <button onClick={accountInfoClose}>Close</button>
                </div>

            </div>
        </>


    )
}
