import React from 'react';
import CartContainer from '../containers/CartContainer';
import "../styles/cartPage.css"

const CartPage = () => {
  return (
    <div className="cart-page">
      <CartContainer /> {/* Renderiza el contenedor de carritos */}
    </div>
  );
};

export default CartPage;
