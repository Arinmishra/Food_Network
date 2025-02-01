import ResCard, { RestaurantWithDiscount } from "./ResCard";
import { useContext, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [topRatedList, settopRatedList] = useState([]);
  const [searchText, setsearchText] = useState("");

  const { resList, searchList, setsearchList } = useRestaurantList();

  const ResCardDiscounted = RestaurantWithDiscount(ResCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1 className="font-bold text-center m-12">
        Oops!! It seems You are Offline. Please check your Internet Connection!
      </h1>
    );
  }

  if (resList.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <>
      <div className="searchLineContainer">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setsearchList(filteredRes);
              settopRatedList([]);
            }}
          >
            Search
          </button>
        </div>

        <div className="top-rated-res">
          <button
            className="top-rated-btn"
            onClick={() => {
              const topRated = resList.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              settopRatedList(topRated);
              setsearchList([]);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="userName">
          <label className=" text-lg font-bold "> User Name: </label>
          <input
            className="userName-input"
            type="text"
            placeholder="Name"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="res-container">
        {searchList.length > 0 ? (
          searchList.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                <ResCardDiscounted resData={restaurant} />
              ) : (
                <ResCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : topRatedList.length > 0 ? (
          topRatedList.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                <ResCardDiscounted resData={restaurant} />
              ) : (
                <ResCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <h1 className="not-found">No Restaurants Found:)</h1>
        )}
      </div>
    </>
  );
};

export default Body;
