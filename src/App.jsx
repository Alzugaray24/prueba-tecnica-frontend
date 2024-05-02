import NavBar from "./components/NavBar.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import { Route, Routes } from "react-router";
import FooterPage from "./pages/FooterPage.jsx";
import RegisterContainer from "./containers/RegisterContainer.jsx";
import LoginContainer from "./containers/LoginContainer.jsx";
import ProfileContainer from "./containers/ProfileContainer.jsx";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div
        className="app-container"
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        <Routes>
          <Route path="/products" element={<ProductPage title="Tienda" />} />
          <Route path="/cart" element={<CartPage title="Categoría" />} />
          <Route
            path="/register"
            element={<RegisterContainer title="Register" />}
          />
          <Route path="/login" element={<LoginContainer title="Login" />} />
          <Route path="/profile" element={<ProfileContainer title="Login" />} />
          {/* <Route path="/favorite" element={<FavoriteContainer title="favorite" />} /> */}
        </Routes>
      </div>
      <FooterPage />
    </div>
  );
}

export default App;
