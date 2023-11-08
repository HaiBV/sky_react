import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { removeAlert, setAlert } from "features/alert/alert.slice";
import { loadUser, register } from "features/auth/auth.slice";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "store";

const Register = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== password2) {
      const id = nanoid();
      dispatch(
        setAlert({
          id,
          message: "Passwords do not match",
          type: "danger",
        })
      );
      setTimeout(() => dispatch(removeAlert(id)), 5000);
    } else {
      const resultAction = await dispatch(
        register({ name: formData.name, email: formData.email, password: formData.password })
      );

      // NOTE: use this way instead of dispatch action in action/reducer
      if (register.fulfilled.match(resultAction)) {
        dispatch(loadUser());
      }
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" required value={name} onChange={handleOnChange} />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={handleOnChange} />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength={6}
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength={6}
            value={password2}
            onChange={handleOnChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </>
  );
};

export default Register;
