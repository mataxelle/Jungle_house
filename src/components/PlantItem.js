import CareScale from "./CaraScale";
import "../styles/PlantItem.css";

function PlantItem({
  id,
  name,
  price,
  cover,
  water,
  light,
  isBestSale,
  isSpecialOffer,
}) {
  return (
    <div>
      <li key={id} className="jh-plant-item">
        <img
          className="jh-plant-item-cover"
          src={cover}
          alt={`${name} cover`}
        />
        {name}
        <span>{price}€</span>
        <div>
          {isBestSale ? <span className="jh-plant-bestseller">🔥</span> : null}
          {isSpecialOffer ? <div className="jh-plant-sales">solde</div> : null}
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
      </li>
    </div>
  );
}

export default PlantItem;
