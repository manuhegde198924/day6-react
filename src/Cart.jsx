import React from "react";

const cartStyle = {
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "20px",
  marginTop: "20px",
};

const cartItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #ddd",
  padding: "10px 0",
};

const cartTotalStyle = {
  marginTop: "10px",
  textAlign: "right",
};

function Cart({ cart, total, dispatch }) {
  return (
    <div style={cartStyle}>
      <h2 style={{ textAlign: "center" }}>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} style={cartItemStyle}>
          <span>
            {item.name} x {item.quantity}
          </span>
          <span>${item.price * item.quantity}</span>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", productId: item.id })
            }
          >
            Remove
          </button>
        </div>
      ))}
      <div style={cartTotalStyle}>
        <h3>Total: ${total.toFixed(2)}</h3>
        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
