import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { RES_IMG_CDN } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  // console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center m-5">Cart</h1>

      {cartItems.length === 0 ? (
        <h1 className="text-center font-bold text-2xl my-5">
          Cart is empty🧺. Please add items to Cart😊.
        </h1>
      ) : (
        <div className="border border-pink-500 shadow-2xl my-5 rounded-lg w-5/12 mx-auto">
          <ul className="menu-ul">
            {cartItems.map((item) => (
              <li
                className="menu-li"
                data-testid="cartItem"
                key={item.card.info.id}
              >
                <div className="menu-content">
                  <div className="menu-info">
                    <span className="menu-name">{item.card.info.name}</span>

                    <span className="menu-price">
                      {/* Check if finalPrice exists */}
                      {item.card.info.finalPrice ? (
                        <>
                          {/* Cross out price or defaultPrice */}
                          <span className="line-through text-zinc-400">
                            {"₹"}
                            {(item.card.info.price ||
                              item.card.info.defaultPrice) / 100}
                          </span>
                          {/* Display finalPrice */}
                          <span className="font-bold text-green-600 ml-2">
                            {"₹"}
                            {item.card.info.finalPrice / 100}
                          </span>
                        </>
                      ) : (
                        // If no finalPrice, show price or defaultPrice
                        <span>
                          {"₹"}
                          {item.card.info.price
                            ? item.card.info.price / 100
                            : item.card.info.defaultPrice / 100}
                        </span>
                      )}
                    </span>

                    <p className="menu-description">
                      {item.card.info.description}
                    </p>
                  </div>
                  <div className="relative inline-block">
                    <img
                      className="menu-img"
                      src={RES_IMG_CDN + item?.card?.info?.imageId}
                      alt="img"
                    ></img>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            className="border bg-zinc-600 px-3 py-1 ml-20  my-4 rounded-lg text-white"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
