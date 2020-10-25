import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="app">
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <div className='body'>{props.children}</div>
      <Footer />
    </div>
  );
}
