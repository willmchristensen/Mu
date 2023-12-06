import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useModal } from "../../context/Modal";
import "./LightLoginFormModal.css";

function LightLoginFormModal({ticket}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(credential, password));
    if (data) {
      const valErrors = data.map((error) => {
        const [field, message] = error.split(':');
        return {field: field, message: message}
      })
      const newErrors = [];
      valErrors.forEach(e => {
        newErrors.push(e.message)
      })
      setErrors(newErrors);
    } else {
        closeModal()
    }
  };
  // IF LOGGING IN FROM THE SHOP PAGE, REDIRECT TO SHOP
  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password')).then(closeModal())
    if(ticket){
      history.push('/shop/cart');
    }else{
      history.push('/')
    }
}
  return (
    <div
        className="light-login-container"
    >
      <h2 className="login-title-light">I have a MU account</h2>
      <form onSubmit={handleSubmit}>
        <ul className="errors-container">
          {errors.length > 0 && <span className="errors">Credentials Invalid</span>}
        </ul>
        <div className="light-login-form-row">
          <label>
            Username or email
          </label>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </div>
        <div className="light-login-form-row">
          <label>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="post-owner-buttons">
          <button
            type="submit"
            className="light-oval-button"
          >
            Login
          </button>
          <button 
            onClick={demoLogin} 
            className='light-oval-button'
            >
            Demo User
        </button>
        </div>
      </form>
    </div>
  );
}

export default LightLoginFormModal;
