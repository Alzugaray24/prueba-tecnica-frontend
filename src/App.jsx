import React from "react";
import NavBar from "./components/NavBar.jsx";
// import CartContainer from "./containers/CartContainer.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import { Route, Routes } from "react-router";
import FooterPage from "./pages/FooterPage.jsx";
// import RegisterPage from "./pages/RegisterPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import ProfilePage from "./pages/ProfilePage.jsx";
import "./styles/App.css";
import RegisterContainer from "./containers/RegisterContainer.jsx";
import LoginContainer from "./containers/LoginContainer.jsx";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app-container" style={{ minHeight: "calc(100vh - 100px)" }}>
        <Routes>
          <Route path="/products" element={<ProductPage title="Tienda" />} />
          <Route path="/cart" element={<CartPage title="Categoría" />} />
          <Route path="/register" element={<RegisterContainer title="Register" />} />
          <Route path="/login" element={<LoginContainer title="Login" />} />
          {/* <Route path="/profile" element={<ProfilePage title="Login" />} /> */}
        </Routes>
      </div>
      <FooterPage />
    </div>
  );
}

export default App;
