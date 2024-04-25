import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import Cart from "./Cart";
import Footer from "./Footer";
import logo from "../assets/green_leaf.png";
import "../styles/Layout.css";
import { useEffect, useState } from "react";

function App() {
  const title = "The Jungle House";

  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Banner>
        <img src={logo} alt={title} className="jh-logo" />
        <h1 className="jh-title">{title}</h1>
      </Banner>
      <div className="jh-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
