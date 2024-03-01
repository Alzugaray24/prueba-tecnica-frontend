import React from "react";
import NavBar from "./components/NavBar.jsx";
import CartContainer from "./containers/CartContainer.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { Route, Routes } from "react-router";
import FooterPage from "./pages/FooterPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app-container" style={{ minHeight: "calc(100vh - 100px)" }}>
        <Routes>
          <Route path="/" element={<ProductPage title="Tienda" />} />
          <Route path="/cart" element={<CartContainer title="Categoría" />} />
          <Route path="/register" element={<RegisterPage title="Register" />} />
          <Route path="/login" element={<LoginPage title="Login" />} />
        </Routes>
      </div>
      <FooterPage />
    </div>
  );
}

export default App;
