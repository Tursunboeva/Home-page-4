import React from 'react'
import '../header/Header.css'


const Header = () => {
  return (
    <header>
         
        <div className="container">
            <div className="homePage_wrapper">
                <h2>
                FIND CLOTHES THAT MATCHES YOUR STYLE
                </h2>
                <p className='text'>
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className='home_btn'>Shop Now</button>
                <div className="sum">
                    <div className="box">
                        <span>200+</span>
                        <p>International Brands</p>
                    </div>
                    <div className="box">
                        <span>2,000+</span>
                        <p>High-Quality Products</p>
                    </div>
                    <div className="box">
                        <span>30,000+</span>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="line">
            
        </div>
    </header>
  )
}

export default Header