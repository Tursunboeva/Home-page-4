import React from 'react'
import '../footer/Footer.css'
import social from '../../images/Social.svg'
import visa from '../../images/Frame 53.svg'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="subscribe">
          <h3 className='subscribe_h3'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
          <div className="subscribe_form">
          <form className='subscribe_input'>
            <input className='' type="url"  placeholder='Enter your email address'/>
          </form>
          <button className='subscribe_btn'>Subscribe to Newsletter</button>
          </div>
        </div>
        <div className="company_wrapper">
          <div className="company_box">
            <h4>SHOP.CO</h4>
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <img src={social} alt="" />
          </div>
          <ul className='ul'>
            <li><b>Company</b></li>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>

          <ul className='ul'>
            <li><b>Help</b></li>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>

          <ul className='ul'>
            <li><b>Faq</b></li>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
          
          <ul className='ul'>
            <li><b>Resources</b></li>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
        <div className="card">
        <p className='teg'>Shop.co © 2000-2023, All Rights Reserved</p>
        <img src={visa} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer