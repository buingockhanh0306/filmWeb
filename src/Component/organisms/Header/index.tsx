import React, { useState } from "react";
import ButtonDefault from "../../atoms/Button/ButtonDefaut";
import Logo from "../../atoms/Logo";
import SearchBar from "../../atoms/SearchBar";
import GroupIcons from "../../molecules/GroupIcons";
import Navbar from "../../molecules/Navbar";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpenSearch = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-headerColor">
      <div className="flex items-center">
        <Logo />
        {/* <Navbar /> */}
      </div>
      <div className="flex items-center">
        {open ? <SearchBar /> : ""}
        <GroupIcons clickSearch={() => handleOpenSearch()} />
      </div>
    </div>
  );
};

export default Header;
