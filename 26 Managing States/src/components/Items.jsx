import { useState } from "react";

const Items = ({ item }) => {
  let [activeItem, setActiveItem] = useState([]);

  let onBuyButton = (item, event) => {
    let newActiveItem = [...activeItem, item];
    setActiveItem(newActiveItem);
  };

  return (
    <>
      <li
        className={`list-group-item ${activeItem.includes(item) && "active"}`}
      >
        {item}
        <button
          type="button"
          className="btn btn-success my-button"
          onClick={(event) => {
            onBuyButton(item, event);
          }}
        >
          order
        </button>
      </li>
    </>
  );
};

export default Items;
