import React from 'react';
import imgaen from "../assets/segundo logo.png";
import javascript from "../assets/js.png";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import bootstrap5 from "../assets/bootstrap.png";
import typeScript from "../assets/typescript.png";
import firebaseLogo from "../assets/firebaseLogo.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";

const Header = () => {
  return (
    <div className='header-container'>
        <img src={imgaen} alt='Header' className='img-header-container'/>
        <div className='header-images-logo-container'>
          <img src={javascript} alt='javascript' className='icono-flotante effect-scale'/>
          <img src={html} alt='html' className='icono-flotante effect-scale-2'/>
          <img src={css} alt='html' className='icono-flotante effect-scale'/>
          <img src={bootstrap5} alt='html' className='icono-flotante effect-scale-2'/>
          <img src={typeScript} alt='html' className='icono-flotante effect-scale'/>
          <img src={firebaseLogo} alt="logo" className="icono-flotante effect-scale-2"/>
          <img src={gitLogo} alt="logo" className="icono-flotante effect-scale"/>
          <img src={githubLogo} alt="logo" className="icono-flotante effect-scale-2"/>
        </div>
    </div>
  )
}

export default Header;