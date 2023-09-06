import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase.js";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth)
      } else {

      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">

      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>

            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/test" />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  )
}



export default App;
