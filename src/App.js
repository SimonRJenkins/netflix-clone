import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"

function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/test" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
