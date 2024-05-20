import NavBar from "./components/NavBar.jsx";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreateProd from "./components/CreateProd.jsx";
import "./assets/css/app.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage title="Home" />} />
          <Route
            path="/create-product"
            element={<CreateProd title="Create" />}
          />
          <Route path="/products" element={<ProductPage title="Tienda" />} />
          <Route path="/register" element={<RegisterPage title="Register" />} />
          <Route path="/login" element={<LoginPage title="Login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
