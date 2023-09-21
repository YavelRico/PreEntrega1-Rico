
import React from 'react';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <i class="fa-solid fa-basket-shopping"></i>
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
};

export default CartWidget;