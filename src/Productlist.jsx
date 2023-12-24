import React from "react";

const productListStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

const productItemStyle = {
  border: "5px solid black",
  borderRadius: "5px",
  padding: "20px",
  margin: "20px",
  width: "200px",
  textAlign: "center",
  background: "#3498db",
  transition: "transform 0.3s ease-in-out", // Add transition properties
  cursor: "pointer", // Add cursor pointer for hover effect
};

const quantityControlsStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "10px",
};

function ProductList({ products, dispatch }) {
  return (
    <div style={productListStyle}>
      {products.map((product, index) => (
        <div
          key={product.id}
          style={{
            ...productItemStyle,
            transitionDelay: `${index * 0.1}s`, // Add unique transition delay
          }}
          onClick={() =>
            dispatch({ type: "ADD_TO_CART", productId: product.id })
          } // Add onClick for the whole item
        >
          <div>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              {product.name}
            </span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <span style={{ fontSize: "16px" }}>${product.price}</span>
          </div>
          <div style={quantityControlsStyle}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch({
                  type: "DECREASE_QUANTITY",
                  productId: product.id,
                });
              }}
            >
              Remove
            </button>
            <span style={{ fontSize: "16px" }}>{product.quantity || 0}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch({
                  type: "INCREASE_QUANTITY",
                  productId: product.id,
                });
              }}
            >
              Add
            </button>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "ADD_TO_CART", productId: product.id });
            }}
            style={{ marginTop: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
