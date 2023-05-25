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
  const [errors, setErrors] = useState({});
  const [validationErrors, setValidationErrors] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const valErr = {};
		if(!email) { 
      valErr.email = "Email is required.";   
    } else if(email.length <= 3 || email.split('@')[0].length <= 3) {
      valErr.email = 'Email must be 3 or more characters.'
    }
		if(!username) valErr.username = "Username is required.";
		if(!password) valErr.password = "Password is required.";

    if(!email || !username || !password || Object.values(valErr).length > 0) {
      setIsDisabled(true);
      setErrors(valErr);
      return;
    }
    if (password !== confirmPassword) {
      setErrors(['Confirm Password field must be the same as the Password field']);
    }else { 
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
        setValidationErrors(newErrors);
      }
      setIsDisabled(false);
    }
		setErrors(valErr)
  };

  useEffect(() => {
    if(isSubmitted) { 
      const valErrors = {};
      if(!email) valErrors.email = "Email is required.";  
      console.log('------------------------------a',email.split('@'));  
      if(email.length < 11 || email.split('@')[0].length <= 2 || email.split('@').length < 2 || email.split('@').length > 2 || email.split('.').length > 2 || email.split('.').length < 1) valErrors.email = 'Invalid Email.'
      if(!username) valErrors.username = "Username is required.";
      if(!password) valErrors.password = "Password is required.";
      setErrors(valErrors)
      setIsDisabled(Object.values(valErrors).length > 0)
    }
  }, [isSubmitted, email ,username ,password]);
  
  if (sessionUser) return <Redirect to="/" />;

  return (
    <div className="create-event-container">
        <form 
          onSubmit={handleSubmit}
          className="create-event-form"
        >
          <ContentHeader content={'Register'} />
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
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
          <label>
            Username
            </label>
            {errors.username && <span className='errors'> {errors.username} </span>}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // required
            />
          <label>
            Password
          </label>
          {errors.password && <span className='errors'> {errors.password} </span>}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
          <label>
            Confirm Password
          </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              // required
            />
            <div className="form-buttons">
              <button 
                type="submit" className="oval-button" 
                disabled={isDisabled}
              >
                Sign Up
              </button>
            </div>
        </form>
    </div>
  );
}

export default SignupFormPage;
