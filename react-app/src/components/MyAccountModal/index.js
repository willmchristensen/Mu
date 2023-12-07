import "./MyAccountModal.css";
import LoginFormModal from "../LoginFormModal";
import { NavLink, useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";

const MyAccountModal = ({ user, logout }) => {
  const { closeModal } = useModal();
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push("/register");
    closeModal();
  };

  return (
    <div className="modal-wrapper">
      <button className="x" onClick={closeModal}>
        <i class="fas fa-times"></i>
      </button>
      {user ? (
        <div className="my-account-user-dropdown">
          <div className="user-dropdown-container">
            <span className="lineup-button">{user.username}</span>
            <NavLink
              id="my-tickets-button"
              className="lineup-button"
              to={"/my-tickets"}
              onClick={closeModal}
            >
              <span className="lineup-button-text">My Tickets</span>
            </NavLink>
            <button onClick={logout} id="profile-dropdown-logout-button">
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <div className="my-account-modal-container">
          <div className="log-in">
            <LoginFormModal title={"Login to your account"} />
          </div>
          <div className="vl"></div>
          <div className="sign-up">
            <div className="sign-up-top-row">
              <h2 className="sign-up-title">New to Mu? Sign up</h2>
            </div>
            <button className="oval-button inverse" onClick={handleClick}>
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccountModal;
