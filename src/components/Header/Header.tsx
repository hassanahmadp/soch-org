import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/business">Business</NavLink>
      </li>
      <li>
        <NavLink to="/community">Community</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/newsroom">News Room</NavLink>
      </li>
      <li>
        <NavLink to="/careers">Careers</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};
