import React from "react";
import icon from "./favicon.ico";
import styled from "styled-components";

const Navbar = () => {

  const NavHomeButton = styled.button`
  padding: 10px;
  border-radius: 20px;
  text-decoration: none;
  background-color: #2DC86F;
  border: none;
  font-size: 15px;
  width: 100px;
  text-decoration: none;
  `
  const navbar = {
    backgroundColor: "white"
  }

  return (
    <div className="navbar navbar-expand-sm" style={navbar}>
      <div className="container">
        <img src={icon} alt="" style={{width:"42px", height:"42px"}} />
        {/* <Link to="/" className="navbar-brand ml-2">
          NFT's
        </Link> */}
        {/* <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul
            style={{ fontSize: "0.8rem", letterSpacing: "0.2rem" }}
            className="navbar-nav ml-auto"
          >
            {/* <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mint" className="nav-link">
                Mint NFT
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to="https://fomobaby.app/" className="Home">
                Home
              </NavLink>
            </li> */}
            <NavHomeButton> <a href="https://fomobaby.app/">Home</a> </NavHomeButton>
            {/* <li className="nav-item">
              <Link to="/my-tokens" className="nav-link">
                My Tokens
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/queries" className="nav-link">
                Queries
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
