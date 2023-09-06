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
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  console.log("user:", user);
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          }))
      } else {
        dispatch(logout());
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
