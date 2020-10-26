import React, { useState, useEffect } from "react";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import MainContainer from "./containers/MainContainer";
import Layout from "./layouts/Layout";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import { Route, useHistory, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (currentUser !== null) history.push(`/user/${currentUser.id}/books`);
  });

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push(`/user/${userData.id}/books`);
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/login");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    history.push("/");
    removeToken();
  };

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/register">
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path="/">
          <MainContainer currentUser={currentUser} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
