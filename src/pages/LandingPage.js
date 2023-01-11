// import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { BsForwardFill } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";

import Carousel from "react-bootstrap/Carousel";
import ItemCard2 from "../components/ItemCard2";
import ItemCard from "../components/ItemCard";
import HeadFoot from "../components/HeadFoot";
import ShortMessage from "../components/ShortMessage";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <HeadFoot>

    <main>
      <div className="carousel_container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="carousel-content">
              <div className="details">
                <h1 className="title-hero">
                  First slide label First slide label First slide label
                </h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <Button variant="contained" className="hero-btn">
                  Read more
                </Button>
              </div>
              <div className="image">
                <img
                  className="d-block w-100 carousel-image"
                  src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=1920&q=75"
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-content">
              <div className="details">
                <h1 className="title-hero">
                  First slide label First slide label First slide label
                </h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <Button variant="contained">Read more</Button>
              </div>
              <div className="image">
                <img
                  className="d-block w-100 carousel-image"
                  src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F5.Ford2018.png&w=1920&q=75"
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-content">
              <div className="details">
                <h1 className="title-hero">
                  First slide label First slide label First slide label
                </h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <Button variant="contained">Read more</Button>
              </div>
              <div className="image">
                <img
                  className="d-block w-100 carousel-image"
                  src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F5.Ford2018.png&w=1920&q=75"
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="flash">
        <div className="header">
          <h3>
            <IoIosFlash />
            Flash
          </h3>
          <button>
            <p>
              View all <BsForwardFill />
            </p>
          </button>
        </div>
        <div className="item-cards">
          <div className="item">
           <Link to="/details"> <ItemCard /></Link>
          </div>
          <div className="item">
          <Link to="/details"> <ItemCard /></Link>
          </div>
          <div className="item">
          <Link to="/details"> <ItemCard /></Link>
          </div>
          <div className="item">
          <Link to="/details"> <ItemCard /> </Link>
          </div>
          <div className="item">
            <ItemCard />
          </div>
        </div>
      </div>
      <div className="flash">
        <div className="header">
          <h3>Most Bought</h3>
          <button>
            <p>
              View all <BsForwardFill />
            </p>
          </button>
        </div>
        <div className="item-cards">
          <div className="item">
            <ItemCard2 />
          </div>
          <div className="item">
            <ItemCard2 />
          </div>
          <div className="item">
            <ItemCard2 />
          </div>
          <div className="item">
            <ItemCard2 />
          </div>
          <div className="item">
            <ItemCard2 />
          </div>
          <div className="item">
            <ItemCard2 />
          </div>
        </div>
      </div>

      <section>
        <ShortMessage />
        <ShortMessage />
        <ShortMessage />
        <ShortMessage />
      </section>

    </main>
    </HeadFoot>

  );
}
