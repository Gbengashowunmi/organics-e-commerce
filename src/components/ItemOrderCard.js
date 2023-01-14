import React from "react";

export default function ItemOrderCard() {
  return (
    <div className="item-order-container">
      <div className="item-detail">
        <div className="img">
          <img src="" alt="" />
        </div>
        <h4>Item Name</h4>
        <p className="item-price">
          $250.00 x 2 <span className="unit-total">$500.00</span>
        </p>
      </div>
      <div className="item-card-function">
        <div>close</div>
        <div className="btn">
          <button>-</button>
          <p>3</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
