import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';


export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <>
    <div className='header'>
      <div className='site-name'>
        <h1>Athenaeum</h1>
        </div>
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
     <div className='nav'>
      <nav>
        <ol>
          <li><Link>My Books</Link></li>
          <li><Link to='/books'>Browse</Link></li>
        </ol>

      </nav>
      <hr />
      </div>
      </>
  )
}
