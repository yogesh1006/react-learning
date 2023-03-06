import { useState } from "react";
import { Link } from "react-router-dom"

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://st2.depositphotos.com/3867453/5508/v/600/depositphotos_55081557-stock-illustration-food-word-sign-logo-icon.jpg"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logoutHandler=() => setIsLoggedIn(!isLoggedIn)

  const loginHandler = () => setIsLoggedIn(!isLoggedIn)

  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        {isLoggedIn ? <li onClick={logoutHandler}>Logout</li> : <li onClick={loginHandler}>Login</li>}
      </ul>
    </div>
  );
};

export default Header;
