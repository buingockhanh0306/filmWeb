import React from "react";
import HeadingFooter from "../../atoms/HeadingFooter";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const GroupContact = () => {
  return (
    <div>
      <HeadingFooter children="Contact Us" />
      <div>
        <a href="/" className="flex items-center">
          <BsFacebook className="my-2 text-xl" />
          <span className="ml-4 cursor-pointer hover:text-secondColor">
            buikhanhi2k
          </span>
        </a>
        <a href="/" className="flex items-center">
          <MdEmail className="my-2 text-xl" />
          <span className="ml-4 cursor-pointer hover:text-secondColor">
            buikhanhi2k
          </span>
        </a>
        <a href="/" className="flex items-center">
          <AiFillTwitterCircle className="my-2 text-xl" />
          <span className="ml-4 cursor-pointer hover:text-secondColor">
            buikhanhi2k
          </span>
        </a>
        <a href="/" className="flex items-center">
          <BsLinkedin className="my-2 text-xl" />
          <span className="ml-4 cursor-pointer hover:text-secondColor">
            buikhanhi2k
          </span>
        </a>
      </div>
    </div>
  );
};

export default GroupContact;
