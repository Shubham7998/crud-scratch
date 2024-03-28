import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Header.css";

function Header() {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className="navigation-container">
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item" onClick={() => handleClick("/")}>
            Home
          </li>
          <li className="nav-item" onClick={() => handleClick("/property")}>
            Property
          </li>
          <li className="nav-item" onClick={() => handleClick("/showlist")}>
            Showlist
          </li>
          <li className="nav-item" onClick={() => handleClick("/search")}>Search</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
