import React, { useState } from 'react'
import './Login.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
export default function Login({ handleLogin, handlePopup, popupmsg }) {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  function handleOnLogin(e) {

    if (mobile.length !== 10 || isNaN(mobile)) {
      e.preventDefault();
      alert('Mobile no should be 10 digit');
    } else {

      const storedData = JSON.parse(localStorage.getItem('user'));

      if (storedData == null) {
        alert('No data found');
      } else

        if (storedData.mob == null || storedData.password == null) {
          alert('data not found');
        } else

          if (storedData.mob === mobile && storedData.password === password) {
            handlePopup();
            popupmsg('Login successful..')
            handleLogin(true);
          } else {
            alert("mobile no or password is incorrect...");

          }

    }
  }


  return (
    <>
      <div className='login_container'>
        <div className='login'>
          <h1>Login</h1>
          <form>
            <div className='form-group'>
              <label htmlFor='mob'>Mobile No:</label>
              <input onChange={(e) => setMobile(e.target.value)} type='text' id='mob' name='mob' required />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password:</label>
              <input onChange={(e) => setPassword(e.target.value)} type='password' id='password' name='password' required />
            </div>
            <button type='submit' onClick={handleOnLogin}><Link to='/'>Login</Link></button>
          </form>
          <p>Don't have an account? <Link to='/register'>Register here</Link></p>
        </div>

      </div>
      <Footer />
    </>

  )
}
