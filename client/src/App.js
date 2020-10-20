import React, { useState } from 'react';
import Layout from './layouts/Layout';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { Route, useHistory, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }
  
  return (
    <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
    >

    </Layout>
  );
}

export default App;
