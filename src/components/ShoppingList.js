import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);

    if (currentPlantSaved) {
      const plantInCart = cart.filter((plant) => plant.name !== name);
      updateCart([
        ...plantInCart,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div className="jh-shopping-list">
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <ul className="jh-plant-list">
        {plantList.map(
          ({
            id,
            name,
            price,
            cover,
            water,
            light,
            category,
            isBestSale,
            isSpecialOffer,
          }) =>
            !activeCategory || activeCategory === category ? (
              <div key={id}>
                <PlantItem
                  name={name}
                  price={price}
                  cover={cover}
                  water={water}
                  light={light}
                  isBestSale={isBestSale}
                  isSpecialOffer={isSpecialOffer}
                />
                <button
                  className="jh-plant-btn"
                  onClick={() => addToCart(name, price)}
                >
                  Ajouter au panier
                </button>
              </div>
            ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
