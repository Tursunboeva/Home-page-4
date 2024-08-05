import React from 'react'
import '../sections/Section.css'
import frm1 from '../../images/Frame1.png'
import frm2 from '../../images/Frame2.png'
import frm3 from '../../images/Frame3.png'
import frm4 from '../../images/Frame4.png'

const Section = () => {
  return (
    <section id='section'>
        <div className="container">
            <div className="style_wrapper">
                <div className="style_title">
                <h3 className='style_h3'>BROWSE BY dress STYLE</h3>
                </div>
                <div className="style_box">
                <img className='img1' src={frm1} alt="" />
                <img className='img2' src={frm2} alt="" />
                <img className='img1' src={frm4} alt="" />
                <img className='img2' src={frm3} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section