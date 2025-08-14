import React, { useState } from 'react'
import './Register.css';
import { Link } from 'react-router-dom';
export default function Register({handlePopup , popupmsg}) {

    const [name, setName] = useState('');
    const [mob, setMob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [pin, setPin] = useState('');

    // Function to handle form submission
    const handleSubmit = () => {

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
           
        } else if (mob.length !== 10 || isNaN(mob)) {
            alert("Mobile number must be 10 digits!");
           
        } else if (pin.length !== 6 || isNaN(pin)) {
            alert("Pin must be 6 digits!");
        } else if (!name || !mob || !password || !confirmPassword || !address || !pin) {
            alert("Please fill all the fields!");
        } else {
            handlePopup();
            popupmsg("Registration successful")


            const user_info = {
                name: name,
                mob: mob,
                password: password,
                address: address,
                pin: pin
            }
            const userData = JSON.stringify(user_info)
            const key = 'user';
            localStorage.setItem(key, userData);

        }




    };








    return (
        <div className='register'>
            <h1>Register</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' onChange={(e) => setName(e.target.value)} id='name' name='name' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='mob'>Mobile No:</label>
                    <input type='text' onChange={(e) => setMob(e.target.value)} id='mob' name='mob' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} id='password' name='password' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='confirm-password'>Confirm Password:</label>
                    <input type='password' onChange={(e) => setConfirmPassword(e.target.value)} id='confirm-password' name='confirm-password' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='Address'>Address</label>
                    <input type='text' onChange={(e) => setAddress(e.target.value)} id='add' name='add' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='pin'>Pin:</label>
                    <input type='text' onChange={(e) => setPin(e.target.value)} id='pin' name='pin' required />
                </div>
                <button type='submit' onClick={handleSubmit}><Link to="/login">Register</Link></button>
            </form>
            <p>Already have an account? <Link to='/login'>Login here</Link></p>
        </div>

    )
}
