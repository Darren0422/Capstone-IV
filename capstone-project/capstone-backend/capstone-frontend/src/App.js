import React from "react";
import { Route, Routes } from "react-router-dom";
import Api from "./Components/Api";
import Header from "./Components/Header";
import UserProfile from "./Components/UserProfile";
import "./App.css";

// Routes and Route added to navigate to componenets 
function App() {
  return (
    <div className="App">
      <div className="App-head">
        <Header />
      </div>

      <div className="App-api">
        <Routes>
          <Route path="/" element={<Api />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
