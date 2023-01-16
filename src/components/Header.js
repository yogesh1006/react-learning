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
  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
