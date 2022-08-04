import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const cartStyle = {
    backgroundColor: "#F59E0D",
  };

  return (
    <div>
      <nav className="container-full mx-auto flex justify-between py-4 shadow-lg">
        <Link to="/">
          <img style={{ height: "45px" }} src="images/logo.png" alt="logo" />
        </Link>
        <ul className="flex">
          <li className="ml-5 mt-3">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="ml-5 mt-3">
            <NavLink to="/products">Product</NavLink>
          </li>
          <li
            className="rounded-full flex ml-5 px-3 py-2 mt-1"
            style={cartStyle}
          >
            <span>10</span>
            <Link to="/cart">
              <img src="images/cart.png" alt="cart" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
