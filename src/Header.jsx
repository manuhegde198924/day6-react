import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const headerStyle = {
  background: "purple",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
  fontSize: "24px",
};

const cartIconStyle = {
  marginLeft: "10px",
  fontSize: "20px",
  cursor: "pointer",
};

function Header({ cartCount }) {
  return (
    <div style={headerStyle}>
      <h1>
        Awesome Shopping App
        <FontAwesomeIcon icon={faShoppingCart} style={cartIconStyle} />
      </h1>
      <h2>Your Cart Has : {cartCount} Mobile-Company-Brand-Model</h2>
      <p>ThankYou veryMuch,Happy shopping,Visit again </p>
    </div>
  );
}

export default Header;
