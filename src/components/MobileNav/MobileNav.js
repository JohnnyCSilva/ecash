import React from 'react'
import './mobileNav.css'

const MobileNav = () => {
  return (
    <div className='MobileNav__main'>
        <div className='MobileNav__content'>
                <div className='MobileNav__item activeNav'>
                    <i className="pi pi-th-large"></i>
                </div>
                <div className='MobileNav__item'>
                    <i className="pi pi-search"></i>
                </div>
                <div className='MobileNav__item'>
                    <i className="pi pi-chart-pie"></i>
                </div>
                <div className='MobileNav__item'>
                    <i className="pi pi-cog"></i>
                </div>
        </div>
    </div>
  )
}

export default MobileNav