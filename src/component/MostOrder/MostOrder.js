import React from 'react'
import './MostOrder.css'
import { Link } from 'react-router-dom'

export default function MostOrder({ item }) {
  return (
    <div className='mostorder' style={{
      backgroundImage: `url(${item.imgurl})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <Link to="/menu">
        <p>{item.name}</p>
        <div>
          <span style={{ color: "red", fontWeight: "700" }}>{item.price}/-</span>
          <span style={{ color: 'orange' }}>{item.ratting}</span>
        </div>
      </Link>
    </div>
  )
}
