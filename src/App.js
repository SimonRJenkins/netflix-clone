import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;

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
