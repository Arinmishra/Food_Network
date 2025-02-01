import { useState, useEffect } from "react";
import { RES_LIST_API } from "./constants";

const useRestaurantList = () => {
  const [resList, setresList] = useState([]);
  const [searchList, setsearchList] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    const data = await fetch(RES_LIST_API);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setresList(restaurants);
    setsearchList(restaurants);
  }
  return { resList, searchList, setsearchList };
};
export default useRestaurantList;
