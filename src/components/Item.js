import React, { useState } from "react";

function Item({ name, category }) {
  const [toAdd, setToAdd] = useState(true);

  const handleClick = () => {
    setToAdd(!toAdd);
  };

  const inCart = toAdd ? "" : "in-cart";
  const button = toAdd ? "add" : "remove";

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={button} onClick={handleClick}>
        {toAdd ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
