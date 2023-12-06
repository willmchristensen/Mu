import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  // parse data from backend, map over data, destructure each error and fill valErrors with objects representing each error
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(credential, password));
    if (data) {
      console.log(data)
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
  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password')).then(closeModal())
  };
  return (
    <>
      <h2 className="login-title">Login to your account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <ul className="errors-container">
          {errors.length > 0 && <span className="errors">Credentials Invalid</span>}
        </ul>
        <div className="login-form-row">
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
        <div className="login-form-row">
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
            className="oval-button"
          >
            Login
          </button>
          <button onClick={demoLogin} className='oval-button'>Demo User</button>
        </div>
      </form>
    </>
  );
}

export default LoginFormModal;
