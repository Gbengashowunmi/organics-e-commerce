import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { BiCategory } from 'react-icons/bi'
import { BsCart4, BsSearch, BsWhatsapp } from 'react-icons/bs'
import { GrFacebook, GrInstagram, GrMail, GrTwitter } from 'react-icons/gr'
import { RiAccountPinCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function HeadFoot({children}) {
    // Sticky Menu Area
    useEffect(() => {
      window.addEventListener("scroll", isSticky);
      return () => {
        window.removeEventListener("scroll", isSticky);
      };
    });
  
    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
      const header = document.querySelector(".top");
      const scrollTop = window.scrollY;
      scrollTop >= 180
        ? header.classList.add("is-sticky")
        : header.classList.remove("is-sticky");
    };
  return (
    <div>
              <header>
                <div className='toppest'>
                  <h5>shjbf</h5>
                </div>
        <div className="top">
          <h2>Organics</h2>
          <div className="search">
            <BsSearch className="search-icon" />
            <input placeholder="Type and hit enter" />
          </div>
          <div className="cart_contact">
            <div className="icon-container">
              <BsCart4 className="icon" />
            </div>
            <div className="icon-container">
              <RiAccountPinCircleFill className="icon" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <Button variant="contained">
            <BiCategory className="icon" />
            Categories
          </Button>

          <ul>
           <Link to="/"> <li>Home</li> </Link>
            <li>Shop products</li>
            <li>Vendor Aaccount</li>
            <li>Track My Orders</li>
          </ul>
        </div>
      </header>
      {children}
      <footer>
        <div className="logo">
          <h1>Organics</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </p>
        </div>
        <div className="about-us">
          <h3>About Us</h3>
          <ul>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms and condition</li>
            <li>Privacy and policy</li>
          </ul>
        </div>
        <div className="customer-care">
          <h3>customer care</h3>
          <ul>
            <li>Help Center</li>
            <li>how to buy</li>
            <li>track your order</li>
            <li>coprporate and bulk purchasing </li>
            <li>returns and refunds</li>
          </ul>
        </div>
        <div className="contact-us">
          <h3>contact Us</h3>

          <p>
            70 Washington Square South, New York, NY 10012, United States Email:
            uilib.help@gmail.com Phone: +1 1123 456 780
          </p>
          <div className="contact-icon">
            <GrFacebook className="icon" />
            <GrTwitter className="icon" />
            <GrInstagram className="icon" />
            <BsWhatsapp className="icon" />
            <GrMail className="icon" />
          </div>
        </div>
      </footer>
    </div>
  )
}
