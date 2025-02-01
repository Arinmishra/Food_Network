import { useDispatch } from "react-redux";
import { RES_IMG_CDN } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CategoryBody = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <ul className="menu-ul">
      {items.itemCards.map((itemCards) => (
        <li
          className="menu-li"
          data-testid="foodItem"
          key={itemCards.card.info.id}
        >
          <div className="menu-content">
            <div className="menu-info">
              <span className="menu-name">{itemCards.card.info.name}</span>

              <span className="menu-price">
                {/* Check if finalPrice exists */}
                {itemCards.card.info.finalPrice ? (
                  <>
                    {/* Cross out price or defaultPrice */}
                    <span className="line-through text-zinc-400">
                      {"₹"}
                      {(itemCards.card.info.price ||
                        itemCards.card.info.defaultPrice) / 100}
                    </span>
                    {/* Display finalPrice */}
                    <span className="font-bold text-green-600 ml-2">
                      {"₹"}
                      {itemCards.card.info.finalPrice / 100}
                    </span>
                  </>
                ) : (
                  // If no finalPrice, show price or defaultPrice
                  <span>
                    {"₹"}
                    {itemCards.card.info.price
                      ? itemCards.card.info.price / 100
                      : itemCards.card.info.defaultPrice / 100}
                  </span>
                )}
              </span>

              <p className="menu-description">
                {itemCards.card.info.description}
              </p>
            </div>
            <div className="relative inline-block">
              <img
                className="menu-img"
                src={RES_IMG_CDN + itemCards?.card?.info?.imageId}
                alt="img"
              ></img>
              <button
                className="border text-md font-bold bg-white text-green-600 rounded-md px-7 py-1 mx-1 absolute bottom-1 left-1/2 transform -translate-x-1/2"
                onClick={() => handleAddItem(itemCards)}
              >
                ADD
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryBody;
