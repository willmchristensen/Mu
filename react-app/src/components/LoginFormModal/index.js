import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState("");
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

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

  return (
    <>
      <h2 className="login-title">Login to your account</h2>
      <form onSubmit={handleSubmit}>
        <ul className="errors-container">
          {errors.map((error, idx) => (
            <li className="errors" key={idx}>{error}</li>
          ))}
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
        <button
          type="submit"
          className="oval-button"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default LoginFormModal;
