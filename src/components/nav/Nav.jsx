import React from 'react'
import '../nav/Nav.css'
import SHOP from '../../images/SHOP.CO.svg'
import Frame from '../../images/Frame.svg'
import vector from '../../images/Vector.svg'
import search from "../../images/search.svg";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav_wrapper">
                <img src={SHOP} alt="" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="">New Arriwals</Link></li>
                    <li><Link to="">Brands</Link></li>
                </ul>
                <form className='.form'>
                <button className="search__btn" type="submit"><img src={search} alt="" /></button>
                    <input type="text"  placeholder='Search for products...'/>
                </form  >
                <div className="link">
                    <img src={Frame} alt="" />
                    <img src={vector} alt="" />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav