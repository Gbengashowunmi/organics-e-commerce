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
import ItemCard2 from "./ItemCard2";
import ShortMessage from "./ShortMessage";

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
            <li>Shop products</li>
            <li>Vendor Aaccount</li>
            <li>Track My Orders</li>
          </ul>
        </div>
      </header>

      <div className="carousel_container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="carousel-content">
            <div className="details">
              <h1>First slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button variant="contained">
                Read more
              </Button>
            </div>
            <div className="image">
              <img className="d-block w-100 carousel-image" src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=1920&q=75" alt="First slide" />
            </div>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
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
          </Carousel.Item> */}
        </Carousel>
      </div>

      <div className="flash">
        <div className="header">
          <h3>Flash</h3>
          <button>
            <p>View all</p>
          </button>
        </div>
        <div className="item-cards">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      <div className="flash">
        <div className="header">
          <h3>Most Bought</h3>
          <button>
            <p>View all</p>
          </button>
        </div>
        <div className="item-cards">
          <ItemCard2 />
          <ItemCard2 />
          <ItemCard2 />
        </div>
      </div>

      <section>
        <ShortMessage />
        <ShortMessage />
        <ShortMessage />
        <ShortMessage />
      </section>
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
    </main>
  );
}
