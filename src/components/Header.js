import { useState } from "react";

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
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Cart</li>
        {isLoggedIn ? <li onClick={logoutHandler}>Logout</li> : <li onClick={loginHandler}>Login</li>}
      </ul>
    </div>
  );
};

export default Header;
