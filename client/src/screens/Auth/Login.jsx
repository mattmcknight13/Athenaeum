import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='login-top'>
      <h3>Login</h3>
      <form
        className="login-page"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <label>
          Username
          <br />
          <input type="text" value={name} name="name" onChange={handleChange} />
        </label>
        <label>
          Password
          <br />
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <Link to="/register">Register</Link>
        <button>Login</button>
      </form>
    </div>
  );
}
