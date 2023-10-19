import React from 'react';

function CartWidget({ itemCount }) {
  const numberStyle = {
    color: 'cyan',
  };

  return (
    <div className="cart-widget">
      <i className="fa fa-shopping-cart"></i>
      <span className="badge badge-pill" style={numberStyle}>{itemCount}</span>
    </div>
  );
}

export default CartWidget;
