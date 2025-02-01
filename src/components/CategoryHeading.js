import { useState } from "react";
import CategoryBody from "./CategoryBody";

const CategoryHeading = ({ data, showItems, setShowItems }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems();
  };

  return (
    <div>
      <div
        className="menu-title font-bold shadow-lg cursor-pointer flex justify-between"
        onClick={handleClick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {showItems && <CategoryBody items={data} />}
    </div>
  );
};

export default CategoryHeading;
