import React from 'react';
import '../menu-item/menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div
     className={`${size} menu-item`}>
       <div className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
  
      }}/>
        <div className='content'>
          <div className='title'>{title.toUpperCase()}</div>
          <span className='subtitle'>ACHETER</span>
        </div>
      </div>
)
export default MenuItem;