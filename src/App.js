import React, { useReducer } from "react";
import Header from "./Header";
import ProductList from "./Productlist";
import Cart from "./Cart";
import productsData from "./Productsdata.json";

const initialState = {
  cart: [],
  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const addedProduct = productsData.categories[0].products.find(
        (product) => product.id === action.productId
      );

      if (!addedProduct) {
        return state;
      }

      const existingProduct = state.cart.find(
        (product) => product.id === action.productId
      );

      if (existingProduct) {
        // Product already in the cart, update quantity
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.productId
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
          total: state.total + addedProduct.price,
        };
      } else {
        // Product not in the cart, add with quantity 1
        return {
          ...state,
          cart: [...state.cart, { ...addedProduct, quantity: 1 }],
          total: state.total + addedProduct.price,
        };
      }

    case "INCREASE_QUANTITY":
      const increasedProduct = state.cart.find(
        (product) => product.id === action.productId
      );

      if (!increasedProduct) {
        return state;
      }

      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
        total: state.total + increasedProduct.price,
      };

    case "DECREASE_QUANTITY":
      const decreasedProduct = state.cart.find(
        (product) => product.id === action.productId
      );

      if (!decreasedProduct || decreasedProduct.quantity === 0) {
        return state;
      }

      const newQuantity = Math.max(decreasedProduct.quantity - 1, 0);

      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.productId
            ? { ...product, quantity: newQuantity }
            : product
        ),
        total: state.total - decreasedProduct.price,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        total: 0,
      };
    case "REMOVE_FROM_CART":
      const removedProduct = state.cart.find(
        (product) => product.id === action.productId
      );

      if (!removedProduct) {
        return state;
      }

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.productId),
        total: state.total - removedProduct.price * removedProduct.quantity,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app" style={appStyle}>
      <Header cartCount={state.cart.length} />
      <ProductList
        products={productsData.categories[0].products}
        dispatch={dispatch}
      />
      <Cart cart={state.cart} total={state.total} dispatch={dispatch} />
    </div>
  );
}

const appStyle = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#9f3f5f",
  padding: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
};

export default App;
