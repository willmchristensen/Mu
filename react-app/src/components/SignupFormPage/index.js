import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import ContentHeader from "../ContentHeader";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
		setIsSubmitted(true);
    if(!email || !username || !password) {
      setIsDisabled(true)
    }else if (password === confirmPassword) {
        const data = await dispatch(signUp(username, email, password));
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
        }
    } else {
        setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };

  useEffect(() => {
		const errors = {};
		if(!email) errors.email = "Email is required"
    // email?.split('@')
    // if{}
		if(!username) errors.username = "Username is required"
		if(!password) errors.password = "Password is required"
		setValidationErrors(errors)
		// setIsDisabled(true)
  }, [email ,username ,password]);
  if (sessionUser) return <Redirect to="/" />;

  return (
    <div className="create-event-container">
        <form 
          onSubmit={handleSubmit}
          className="create-event-form"
        >
          <ContentHeader content={'Register'} />
          <div>
            {errors.map((error, idx) => (
              <span className="errors" key={idx}>{error}</span>
            ))}
          </div>
          <label>
            Email
          </label>
          {isSubmitted && <span className='errors'> {errors.email} </span>}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          <label>
            Username
            </label>
            {isSubmitted && <span className='errors'> {errors.username} </span>}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          <label>
            Password
          </label>
          {isSubmitted && <span className='errors'> {errors.password} </span>}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          <label>
            Confirm Password
          </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="form-buttons">
              <button type="submit" className="oval-button" disabled={isDisabled}>Sign Up</button>
            </div>
        </form>
    </div>
  );
}

export default SignupFormPage;
