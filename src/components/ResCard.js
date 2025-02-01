import { RES_IMG_CDN } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    cuisines,
    locality,
    areaName,
  } = resData?.info;
  const { slaString } = resData?.info?.sla;

  return (
    <div className="res-card" data-testid="resCard">
      <img
        className="res-img"
        alt="restaurant-img"
        src={RES_IMG_CDN + cloudinaryImageId}
      ></img>

      <div className="res-details">
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#333",
            marginBottom: "10px",
          }}
        >
          {name}
        </h3>
        <h4
          style={{
            color: "white",
            display: "inline",
            borderRadius: "5px",
            backgroundColor: "green",
            padding: "2px 5px",
            marginRight: "10px",
          }}
        >
          {avgRating + " ⭐"}
        </h4>
        <h4 style={{ color: "grey", display: "inline" }}>{"• " + slaString}</h4>
        <h4 style={{ color: "grey", fontWeight: 600, fontSize: "17px" }}>
          {costForTwo}
        </h4>
        <h4 style={{ color: "grey" }}>{cuisines.join(", ")}</h4>
        <h4 style={{ color: "grey" }}>{areaName || locality}</h4>
      </div>
    </div>
  );
};

export const RestaurantWithDiscount = (ResCard) => {
  return (props) => {
    const { resData } = props;
    return (
      <div className="relative">
        <label className="absolute z-10 bg-[rgb(187,34,57)] text-white rounded-lg px-2 py-1 ml-4 mt-2 text-sm">
          {resData?.info?.aggregatedDiscountInfoV3.header +
            " " +
            resData?.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
