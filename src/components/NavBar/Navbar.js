import React from 'react'
import './navbar.css'
import Logo from '../../logoMain.svg'
import LogoMobile from '../../favicon.svg'

const Navbar = () => {
  return (
        <div className="Navbar__content">
            <div className="Navbar__brand">
                <img src={Logo} alt="logo" className="logo__desktop"/>
                <img src={LogoMobile} alt="logo_mobile" className="logo__mobile"/>
            </div>

            <div className="Navbar__menu">
                <ul className="Navbar__menu-list">
                    <a href="#">
                        <li className="Navbar__menu-item active">
                            <i className="pi pi-th-large"></i>
                            <span>Dashboard</span>
                        </li>
                    </a>
                    <a href="#">
                        <li className="Navbar__menu-item"> 
                            <i className="pi pi-star"></i>
                            <span>Watchlist</span>
                        </li>
                    </a>
                    <a href="#">
                        <li className="Navbar__menu-item">
                            <i className="pi pi-chart-pie"></i>
                            <span>Portfolio</span>
                        </li>
                    </a>
                    <a href="#">
                        <li className="Navbar__menu-item">
                            <i className="pi pi-chart-line"></i>
                            <span>Stocks</span>
                        </li>
                    </a>
                    <a href="#">
                        <li className="Navbar__menu-item">
                            <i className="pi pi-chart-bar"></i>
                            <span>Crypto</span>                            
                        </li>
                    </a>
                    <a href="#">
                        <li className="Navbar__menu-item search">
                            <i className="pi pi-search"></i>
                            <span>Search</span>                            
                        </li>
                    </a>
                </ul>
            </div>

        </div>
  )
}

export default Navbar