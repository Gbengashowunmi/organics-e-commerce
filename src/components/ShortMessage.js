import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

export default function ShortMessage() {
  return (
    <div className="short-message">
      <div className="sm-icon"> <TbTruckDelivery className="icon"/></div>
      <h4>Worldwide Delivery</h4>
      <p>We offer competitive prices on our 100 million plus product any range.</p>
    </div>
  );
}
