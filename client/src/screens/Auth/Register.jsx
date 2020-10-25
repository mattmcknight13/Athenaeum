import React, { useState } from 'react'
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const { name, email, password } = formData;
  const { error, handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <form className='register-page' onSubmit={(e)=>{
      e.preventDefault();
      handleRegister(formData);
    }}>
      <h3>Register</h3>
      {
        error &&
        <p>{error}</p>
      }
      <label>
        Username
         <br/>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label>
        Email
         <br/>
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Password
         <br/>
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </label>
      <button>Register</button>
    </form>
  )
}
