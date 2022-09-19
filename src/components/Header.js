import React from 'react'
import './header.css'

import Logo from '../logoMain.svg'

function mobileMenuOpen(){
  document.getElementById("mobile_menu").style.width = "100%";
}

function mobileMenuClose(){
  document.getElementById("mobile_menu").style.width = "0px";
}

function expandForm(){
  document.getElementById("expand_form").style.minWidth = "250px";
  document.getElementById("search_containerMenu").style.backgroundColor = "var(--backgroundDark)";
}

window.addEventListener('click', function(e){
  if (!document.getElementById('expand_form').contains(e.target) && (!document.getElementById('search_containerMenu').contains(e.target))){
   document.getElementById('expand_form').style.minWidth="0px";
   document.getElementById("search_containerMenu").style.backgroundColor = "transparent";
} 
})

function Header() {
  return (
    <div className='header__wrapper'>
      <div className='header__container'>
        <div className='header__logo'>
          <img src={Logo} alt="logo" className='logo'></img>
        </div>
        <div className='header__search'>
          <div className='search__container'>
            <i className="pi pi-search" style={{'fontSize': '1em'}}></i>
            <input type="text" placeholder="Search..."/>
          </div>
        </div>
        <div className='header__toggler'>
        <a onClick={mobileMenuOpen}> <p>Menu</p> <i className='pi pi-bars'></i></a>
        </div>
        <div className='header__menu'>
          <a href='#'>Portfolio</a>
          <a href='#'>Stocks</a>
          <a href='#'>Crypto</a>
          <a href='#'>Messages</a>
          <a href='#'>Account</a>
        </div>
      </div>
      <div className='mobile__menu' id="mobile_menu">
        <i className="pi pi-times" id="close_mobile_menu" onClick={mobileMenuClose}></i>
        <ul className='mobile__menuContainer'>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Stocks</a></li>
          <li><a href='#'>Crypto</a></li>
          <li><a href='#'>Messages</a></li>
          <li><a href='#'>Account</a></li>
          <li>
            <div className='search__containerMenu'>
              <div className='search__midContainer' onClick={expandForm} id="search_containerMenu">
                <i className="pi pi-search" style={{'fontSize': '1em'}}></i>
                <input type="text" placeholder="Search..." id="expand_form"/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header