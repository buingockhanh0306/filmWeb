import React from "react";
import { GoSearch } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Line from "../../atoms/line";
import LinkDropdown from "../../atoms/Link/LinkDropdown";

interface IGroupIcon {
  clickSearch: () => void;
}
const GroupIcons: React.FC<IGroupIcon> = ({ clickSearch }) => {
  return (
    <div className="flex text-xl text-textColor">
      <GoSearch onClick={clickSearch} className="mx-2 cursor-pointer" />
      <div className="relative group">
        <IoMdNotifications className="mx-2 cursor-pointer" />
        {/* <FaUserCircle className="mx-2 cursor-pointer" /> */}
        <ul className="absolute z-10 hidden w-64 px-4 rounded cursor-pointer group-hover:block -right-1 top-8 bg-primaryColor text-textColor">
          <LinkDropdown children="Dây là thông báo thông báothông báothông báothông báo thông báo thông báo thông báo" />
          <Line />
          <LinkDropdown children="Cũng là thông báo nhưng ngắn hơn" />
          <div className="absolute w-4 h-4 rotate-45 bg-primaryColor -top-2 right-4"></div>
          <div className="absolute right-0 h-4 bg-transparent w-36 -top-3"></div>
        </ul>
      </div>

      <div className="relative group">
        <FaUserCircle className="mx-2 cursor-pointer" />
        <ul className="absolute z-10 hidden px-4 rounded cursor-pointer group-hover:block -right-1 top-8 w-36 bg-primaryColor text-textColor">
          <LinkDropdown children="Đăng nhập" />
          <LinkDropdown children="Đăng ký" />
          <div className="absolute w-4 h-4 rotate-45 bg-primaryColor -top-2 right-4"></div>
          <div className="absolute right-0 h-4 bg-transparent w-36 -top-3"></div>
        </ul>
      </div>
    </div>
  );
};

export default GroupIcons;
