import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import { clearCart } from "../../store/cart";
import { useModal } from "../../context/Modal";
import MyAccountModal from "../MyAccountModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const { closeModal } = useModal();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(clearCart());
    history.push("/");
    closeModal();
  };

  return (
    <>
      <div className="navbar-profile-button">
        <OpenModalButton
          onClick={openMenu}
          modalComponent={<MyAccountModal user={user} logout={handleLogout} />}
          buttonText={<i className="fas fa-user-circle" />}
        />
      </div>
    </>
  );
}

export default ProfileButton;
