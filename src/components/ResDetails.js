import ShimmerUI from "./ShimmerUI";
import { useState } from "react";
import { RES_IMG_CDN } from "../utils/constants";
import { useParams } from "react-router-dom";
import useResDetails from "../utils/useResDetails";
import CategoryHeading from "./CategoryHeading";

const ResDetails = () => {
  const { resId } = useParams();

  const resInfo = useResDetails(resId);

  const [showItems, setShowItems] = useState();

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  const {
    name,
    avgRatingString,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const category =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="resdetails-container">
        <img
          className="resdetail-res-img"
          src={RES_IMG_CDN + cloudinaryImageId}
        ></img>
        <div className="res-text">
          <h1 className="font-bold text-2xl my-2">{name}</h1>
          <p
            style={{
              color: "white",
              display: "inline",
              borderRadius: "5px",
              backgroundColor: "green",
              padding: "2px 5px",
              marginRight: "10px",
            }}
          >
            {avgRatingString + " ⭐"}
          </p>
          <p className="inline text-medium text-sm">
            {"• " + totalRatingsString}
          </p>
          <p className="mt-2 font-medium">{costForTwoMessage}</p>
          <p className="text-gray-600">{cuisines.join(", ")}</p>
        </div>
      </div>

      {/* Making accordion */}
      {/* {category.map((c) => (
        <CategoryHeading key={c?.card.card.title} data={c?.card?.card} />
      ))} */}

      {category.map((c, index) => (
        <CategoryHeading
          key={c?.card.card.title}
          data={c?.card?.card}
          showItems={index === showItems && true}
          setShowItems={() => setShowItems(index === showItems ? null : index)}
        />
      ))}
    </>
  );
};
export default ResDetails;
