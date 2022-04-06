import React from "react";
import Button from "../../atoms/Button";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-transparent">
      <div>Khánh</div>
      <Button children="Đăng nhập" />
    </div>
  );
};

export default Header;
