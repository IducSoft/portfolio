import React from 'react';
import imgaen from "../assets/segundo logo.png"

const Header = () => {
  return (
    <div className='header-container'>
        <img src={imgaen} alt='Header' className='img-header-container'/>
    </div>
  )
}

export default Header;