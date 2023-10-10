import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const categories = ["Tradicional", "Digital", "Modelaje", "Servicios"];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">YavelStore</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
							aria-expanded="false">Productos</a>
						<ul className="dropdown-menu">
            {categories.map((category) => (
              <li className="dropdown-item-item" key={category}>
                <Link className="nav-link" to={`/category/${category}`}>{category}</Link>
              </li>
            ))}
						</ul>
					</li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Nosotros</Link>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
      <Link to="/">Brand</Link>
    </nav>
  );
}

export default Navbar;
