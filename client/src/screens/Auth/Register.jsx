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
        
         <br/>
        <input
          type="text"
          value={name}
          name="name"
          placeholder='Username'
          onChange={handleChange}
        />
      </label>
      <label>
        
         <br/>
        <input
          type="text"
          value={email}
          name="email"
          placeholder='Email'
          onChange={handleChange}
        />
      </label>
      <label>
        
         <br/>
        <input
          type="password"
          value={password}
          name="password"
          placeholder='Password'
          onChange={handleChange}
        />
      </label>
      <button>Register</button>
    </form>
  )
}
