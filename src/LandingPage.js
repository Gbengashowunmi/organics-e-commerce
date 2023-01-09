// import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { BsCart4, BsSearch } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { GrFacebook, GrInstagram, GrMail, GrTwitter } from "react-icons/gr";

import Carousel from "react-bootstrap/Carousel";
import ItemCard from "./ItemCard";

export default function LandingPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <main>
      <header>
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
            <li>Home</li>
            <li>Vendor Aaccount</li>
            <li>Track Orders</li>
            <li>User Account</li>
            <li>Track My Orders</li>
            <li>Back to Demos</li>
          </ul>
        </div>
      </header>

      {/* <div className="carousel_container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bonik-react.vercel.app/assets/images/products/apple-watch-0.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=1920&q=75"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F5.Ford2018.png&w=1920&q=75"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div> */}
      <ItemCard />

      <footer>
        <div className="logo"><h1>Organics</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p></div>
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
            <GrFacebook className="icon"/>
            <GrTwitter className="icon"/>
            <GrInstagram className="icon"/>
            <BsWhatsapp className="icon"/>
            <GrMail className="icon"/>
          </div>
        </div>
      </footer>
    </main>
  );
}
