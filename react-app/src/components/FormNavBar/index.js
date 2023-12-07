import "./FormNavBar.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const FormNavBar = ({ pages, orientation }) => {
  const formNavBar =
    orientation === "row" ? "form-nav-bar-row" : "form-nav-bar";
  const formNavContainer =
    orientation === "row" ? "form-nav-container-row" : "form-nav-container";
  const formNavItem =
    orientation === "row" ? "form-nav-item-row" : "form-nav-item";
  return (
    <div className={formNavBar}>
      <div className={formNavContainer}>
        {pages.map((page) => {
          return (
            <div className={formNavItem}>
              <div className="form-nav-item-number">
                {pages.indexOf(page) + 1}
              </div>
              <div className="form-nav-link" to={`form/${page}`}>
                {page}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormNavBar;
