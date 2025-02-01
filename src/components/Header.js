import { HEADER_LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="header-container">
        <img className="logo-img" src={HEADER_LOGO_IMG} alt="app-logo"></img>

        <ul className="nav-ul">
          <li className="nav-li" data-testid="status">
            {onlineStatus ? "🟢Online" : "🔴Offline"}
          </li>
          <li className="nav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li font-bold">
            <Link to="/cart">Cart({cartItems.length})🛒</Link>
          </li>
          <li className="nav-li">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="nav-li">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-li">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-li text-lg font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
