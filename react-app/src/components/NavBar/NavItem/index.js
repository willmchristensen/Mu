import "./NavItem.css";
import { NavLink } from "react-router-dom";

const NavItem = ({ url, text }) => {
  return (
    <div className="nav-item-container">
      <NavLink className="nav-item" to={url}>
        {text}
      </NavLink>
    </div>
  );
};

export default NavItem;
