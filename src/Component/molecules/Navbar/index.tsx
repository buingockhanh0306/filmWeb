import React from "react";
import LinkNavbar from "../../atoms/Link/LinkNavbar";

const Navbar = () => {
  return (
    <ul className="flex text-textColor">
      <LinkNavbar href="/" children="Thịnh hành" />
      <LinkNavbar href="/" children="Phim" />
      <LinkNavbar href="/tv" children="Truyền hình" />
      <LinkNavbar href="/" children="Discover" />
    </ul>
  );
};

export default Navbar;
