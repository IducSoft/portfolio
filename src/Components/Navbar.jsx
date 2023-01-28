import React from 'react';


import logoTipo from "../assets/atomo.png";
import menu from "../assets/menu.png";

const NavBar = () => {
  return (
  
    <nav className="navbar fixed-top navbar-expand-lg bg-myNavBar ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logoTipo} alt='img-logo' style={{width:"3.5rem"}}/>
          <span className='mx-3 my-color-text '>Isaac Urdaneta</span>
        </a>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src={menu} alt='menu'  style={{width:"1.5rem"}} />
        </button>
        <div className="collapse navbar-collapse ml-5 display-flex justify-content-end align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{width:"100%"}}>
            <li className="nav-item mx-2">
              <a className="nav-link my-color-text" href="#">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link my-color-text" href="#">About me</a>
            </li>
            
            <li className="nav-item mx-2">
              <a className="nav-link my-color-text" href='#'>Projects</a>
            </li>
          </ul>
          
        </div>
    </div>
  </nav>
      
    
  )
}

export default NavBar;