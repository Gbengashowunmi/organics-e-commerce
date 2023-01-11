import React from "react";

export default function ItemCard2() {
  return (
    <div className="item2_container">
        <div className="image">
      <img
        src=
        "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=3840&q=75"
        alt=""
      />
        </div>
        <div className="image grey">
      <img
        src=
        "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=3840&q=75"
        alt=""
      />
        </div>
        <div className="image">
      <img
        src=
        "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F2.Audi2017.png&w=3840&q=75"
        alt=""
      />
        </div>

      <div className="product-name">product name</div>
      <div className="no-of-order">no of order in the week</div>
    </div>
  );
}
