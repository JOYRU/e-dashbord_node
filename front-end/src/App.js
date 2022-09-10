import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Nav from "./Nav";
import SignUp from "./SignUp";
import PrivateComponent from './PrivateComponent' ; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <h1>E-Dashboard</h1>

        <Routes>
          <Route element={<PrivateComponent />}>

          
          <Route path="/" element={<h1>Product Component</h1>} />
          <Route path="/add" element={<h1> Add Product Component</h1>} />
          <Route path="/update" element={<h1>Update Product Component</h1>} />
          <Route path="/logout" element={<h1> Logout Component</h1>} />
          <Route path="/profile" element={<h1> Profile Component</h1>} />
         
          </Route>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
