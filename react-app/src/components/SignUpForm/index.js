import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import ContentHeader from "../ContentHeader";
import './SignupFormTickets.css';

function SignUpForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [validationErrors, setValidationErrors] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const valErr = {};
    if (!email) {
      valErr.email = "Email is required.";
    }else if(email.split('@')[0].length < 3) {
      valErr.email = 'Email must be 3 or more characters.';
    }
    if (!username) {
      valErr.username = "Username is required.";
    }
    if (!password) {
      valErr.password = "Password is required.";
    }
    if (!email || !username || !password || Object.values(valErr).length > 0) {
      setIsDisabled(true);
      setErrors(valErr);
      return;
    }
    if (password !== confirmPassword) {
      setErrors(['Confirm Password field must be the same as the Password field']);
    } else {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        const valErrors = data.map((error) => {
          const [field, message] = error.split(':');
          return { field: field, message: message };
        });
        const newErrors = valErrors.map((e) => e.message);
        setValidationErrors(newErrors);
      }
      setIsDisabled(false);
    }
    setErrors(valErr);
  };


  useEffect(() => {
    if(isSubmitted) {
      const valErrors = {};
      if(!email) valErrors.email = "Email is required.";
      if(email.split('@')[0].length < 3) {
        valErrors.email = 'Email must be 3 or more characters.';
      }
      if(!username) valErrors.username = "Username is required.";
      if(!password) valErrors.password = "Password is required.";
      setErrors(valErrors)
      setIsDisabled(Object.values(valErrors).length > 0)
    }else  {
      setIsDisabled(false)
    }
  }, [isSubmitted, email ,username ,password]);

  if (sessionUser) return <Redirect to="/" />;

  return (
    <div className="sign-up-form-container">
        <form
          onSubmit={handleSubmit}
          className="signup-form"
        >
        <h2 className="login-title-light">I need to setup a MU account</h2>
          <div>
            {validationErrors.map((error, idx) => (
              <span className="errors" key={idx}>{error}</span>
            ))}
          </div>
          <label>
            Email
          </label>
          {errors.email && <span className='errors'> {errors.email} </span>}
            <input
                className="signup-form-input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          <label>
            Username
            </label>
            {errors.username && <span className='errors'> {errors.username} </span>}
            <input
                className="signup-form-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          <label>
            Password
          </label>
          {errors.password && <span className='errors'> {errors.password} </span>}
            <input
                className="signup-form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          <label>
            Confirm Password
          </label>
            <input
                className="signup-form-input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="signup-form-buttons">
              <button
                type="submit" className="light-oval-button"
                disabled={isDisabled}
              >
                Register
              </button>
            </div>
        </form>
    </div>
  );
}

export default SignUpForm;
