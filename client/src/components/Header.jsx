import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';


export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className='header'>
      <div className='nav'>
        <h1>Athenaeum</h1>
        <div className='login'>
      {
        currentUser ?
          <>
            <p>{currentUser.name}</p>
            <button className='logout' onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login/Register</Link>
          }
          </div>
        </div>
      <hr />
    </div>
  )
}
