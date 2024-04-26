import React from "react";
import "../styles/Categories.css";

function Categories({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="jh-categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="jh-categories-select"
      >
        <option value="">Catégories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        className="jh-categories-button"
        onClick={() => setActiveCategory("")}
      >
        Réinitialiser
      </button>
    </div>
  );
}

export default Categories;
