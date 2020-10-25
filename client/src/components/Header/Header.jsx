import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <>
      <div className="header">
        <div className='head'>
          <div className="site-name"> 
          <h1>Athenaeum</h1>
        </div>
        <div className="login">
          {currentUser ? (
            <>
              <p>{currentUser.name}</p>
              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link  className='login-link' to="/login">Login/Register</Link>
          )}
          </div>
        </div>
        

        <div className="nav">
          <nav>
            <ol>
              {currentUser && (
                <li>
                  <Link className='nav-link' to={`/user/${currentUser.id}/books`}>My Books</Link>
                </li>
              )}
              <li>
                <Link className='nav-link' to="/books">Browse</Link>
              </li>
            </ol>
          </nav>
          
        </div>
        
      </div>
      
    </>
  );
}
