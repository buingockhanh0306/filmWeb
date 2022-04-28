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
    </div>
  );
};

export default GroupIcons;
