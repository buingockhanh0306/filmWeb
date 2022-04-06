import React from "react";
import LinkNavbar from "../../atoms/LinkNavbar";

const Navbar = () => {
  return (
    <ul className="flex text-textColor">
      <LinkNavbar href="/" children="Home" />
      <LinkNavbar href="/" children="Movie" />
      <LinkNavbar href="/" children="TV Show" />
    </ul>
  );
};

export default Navbar;
