import React from 'react';
import Logo from '../../../img/lgnw.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css';

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img className='imglogoo' src ={Logo} alt = ""/>
        <div className="Search">
          <input type='text' placeholder='#Explore'/>
          <div className="s-icon">
            <UilSearch/>
          </div>
        </div>
    </div>
  )
}

export default LogoSearch