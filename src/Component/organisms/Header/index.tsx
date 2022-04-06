import React from "react";
import ButtonDefault from "../../atoms/Button/ButtonDefaut";
import Navbar from "../../molecules/Navbar";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-secondColor">
      <div>
        <Navbar />
      </div>
      <ButtonDefault children="Đăng nhập" />
    </div>
  );
};

export default Header;
