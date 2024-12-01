const Nav = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="\image\brand_logo.png" alt="logo" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contacts</li>
      </ul>
      <button>login</button>
    </nav>
  );
};

export default Nav;
