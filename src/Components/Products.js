import { renderHook } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
import { createRoutesFromChildren } from 'react-router-dom'
// import Img1 from '../Images/doggy1.png'
import icon1 from '../Images/icon-01.png'
import icon2 from '../Images/icon-02.png'


function Products(props) {
const [Img, setImg] = useState(icon1)

  return (
    <div className="box" >
      <div className="product-card">
        <div className="card-picture">
          <img src={props.Img} alt="" className='product-img' />
        </div>
        <h3>{props.heading3} <img className="itag" src={Img} onMouseEnter={() =>setImg(icon2)} onMouseLeave={()=> setImg(icon1)}/></h3>
        <h5>{props.heading5}</h5>
      </div>
    </div>
  )
}

export default Products

