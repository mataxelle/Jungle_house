import { useState } from "react";
import "../styles/Cart.css";
import closeIcon from "../assets/closeIcon.png";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);

  function addQt(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);

    const plantInCart = cart.filter((plant) => plant.name !== name);
    updateCart([
      ...plantInCart,
      { name, price, amount: currentPlantSaved.amount + 1 },
    ]);

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function minusQt(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);

    const plantInCart = cart.filter((plant) => plant.name !== name);
    updateCart([
      ...plantInCart,
      { name, price, amount: currentPlantSaved.amount - 1 },
    ]);

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function deleteItem(name, price) {
    //delete
  }

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  return isOpen ? (
    <div className="jh-cart">
      <button
        className="jh-cart-toggle-close-button"
        onClick={() => setIsOpen(false)}
      >
        <img src={closeIcon} alt="close icon" className="jh-cart-icon" />
      </button>
      <h2 className="jh-cart-title">Panier</h2>

      {cart.length > 0 ? (
        <div>
          <table>
            <tr>
              <th>Produit</th>
              <th>Qté</th>
              <th>Prix</th>
              <th></th>
            </tr>
            {cart.map(({ name, price, amount }, index) => (
              <tr key={`${name}-${index}`}>
                <td className="jh-cart-item">{name}</td>
                <td>
                  <button id="minus" onClick={() => minusQt(name, price)}>
                    -
                  </button>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={amount}
                    min="1"
                    max="100"
                  />
                  <button id="plus" onClick={() => addQt(name, price)}>
                    +
                  </button>
                </td>
                <td>{price}</td>
                <td>
                  <button
                    className="jh-cart-item-btn"
                    onClick={() => deleteItem()}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </table>
          <h2 className="jh-cart-total">Total : {total}€</h2>
          <div className="jh-cart-toggle-button-action">
            <button
              className="jh-cart-toggle-button"
              onClick={() => updateCart([])}
            >
              Vider le panier
            </button>
            <button
              className="jh-cart-toggle-button"
              onClick={() => setIsOpen(false)}
            >
              Paiement
            </button>
          </div>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="jh-cart-closed">
      <button className="jh-cart-toggle-button" onClick={() => setIsOpen(true)}>
        Ouvrir le panier
      </button>
    </div>
  );
}

export default Cart;
