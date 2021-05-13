import React from "react";
import "./homepage.styles.scss"

const HomePage = () => (
    <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <div className='directory-menu'>
    <div className='menu-item'>
        <div className='content'>
          <div className='title'>CHAPEAUS</div>
          <span className='subtitle'>ACHETER</span>
        </div>
      </div>
    <div className='menu-item'>
        <div className='content'>
          <div className='title'>JACKETS</div>
          <span className='subtitle'>ACHETER</span>
        </div>
      </div>
    <div className='menu-item'>
        <div className='content'>
          <div className='title'>CHAUSSURES</div>
          <span className='subtitle'>ACHETER</span>
        </div>
      </div>
    <div className='menu-item'>
        <div className='content'>
          <div className='title'>FEMMES</div>
          <span className='subtitle'>ACHETER</span>
        </div>
      </div>
    <div className='menu-item'>
        <div className='content'>
          <div className='title'>HOMMES</div>
          <span className='subtitle'>ACHETER</span>
        </div>
      </div>
     
   </div>
   </div>

)

export default HomePage;