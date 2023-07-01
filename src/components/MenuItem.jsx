import React from 'react'
import '../css/menuItemStyle.css'
export const MenuItem = ({ title, price, img, desc }) => {
  return (
    <div className='menu-item'>
      <img src={img} width={400} height={300} />
      <div className='mainDiv'>
        <div className='item-title-price'>
          <div className='itemTitle'>{title}</div>
          <div >
            <span className='itemPrice'>{price}</span>
          </div>
        </div>
        <div className='card-desc'>
          {desc}
        </div>
      </div>
    </div>
  )
}
export default MenuItem;
