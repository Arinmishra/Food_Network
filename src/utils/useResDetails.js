import { useEffect, useState } from "react";
import { RES_DETAILS_API } from "./constants";

const useResDetails = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getResData();
  }, []);

  async function getResData() {
    const data = await fetch(RES_DETAILS_API + resId);
    const json = await data.json();
    setResInfo(json);
  }

  return resInfo;
};
export default useResDetails;
