import React from "react";
import LinkNavbar from "../../atoms/Link/LinkNavbar";

const Navbar = () => {
  return (
    <ul className="flex text-textColor">
      <LinkNavbar href="/" children="Trending" />
      <LinkNavbar href="/" children="Movie" />
      <LinkNavbar href="/tv" children="TV Show" />
      <LinkNavbar href="/" children="Discover" />
    </ul>
  );
};

export default Navbar;
