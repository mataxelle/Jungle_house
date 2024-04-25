import { useState } from "react";
import "../styles/Cart.css";
import closeIcon from "../assets/closeIcon.png";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  return isOpen ? (
    <div className="jh-cart">
      <div className="jh-cart-button">
        <h2 className="jh-cartTitle">Panier</h2>
        <button
          className="jh-cart-toggle-button"
          onClick={() => setIsOpen(false)}
        >
          <img src={closeIcon} alt="close icon" className="jh-cart-icon" />
        </button>
      </div>

      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                <li>
                  {name} - {price}€ x {amount}
                </li>
              </div>
            ))}
          </ul>
          <p className="jh-cartTotal">Total: {total}€</p>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le panier
      </button>
    </div>
  );
}

export default Cart;
