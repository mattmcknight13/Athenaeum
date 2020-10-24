import React from 'react'
import Header from '../components/Header'
import './Layout.css'

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="app">
      <Header
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      {props.children}
    </div>
  )
}
