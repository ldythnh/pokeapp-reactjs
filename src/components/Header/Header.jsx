import logo from "../../assets/logo.png";
import "./Header.css";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // store the current search input value
  const [searchValue, setSearchValue] = useState("");
  const nav = useNavigate();

  // Handle input change event
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Handle key press event
  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      nav(`/${searchValue}`);
    }
  };

  return (
    <header>
      <nav className="maxwidth">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="header-logo" />
        </Link>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by pokémon's name or ID"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
          />
          <Link to={`/${searchValue}`}>
            <Button
              label={<i className="fa-solid fa-magnifying-glass"></i>}
              className="search-container-btn"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
