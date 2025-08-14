import React from 'react'
import './Popup.css';

export default function Popup({msg}) {

    return (
        <div className='loading'>
           
            <div>
                 <span id='loading_text'>{msg+'...'}</span>
                <div id='animate_div'>
                    <span id='animate_cart'></span>
                </div>
            </div>

        </div>
    )
}
