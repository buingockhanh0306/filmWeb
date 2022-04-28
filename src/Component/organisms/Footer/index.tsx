import React from "react";
import HeadingFooter from "../../atoms/HeadingFooter";
import Line from "../../atoms/line";
import LinkFooter from "../../atoms/Link/LinkFooter";
import GroupContact from "../../molecules/GroupContact";

const Footer = () => {
  return (
    <div>
      <div className="hidden w-full py-4 text-center md:block text-textColor bg-headerColor">
        <div className="container grid w-3/4 grid-cols-4 mx-auto">
          <div className="">
            <HeadingFooter children="Heading" />
            <LinkFooter href="/" children="Movie" />
            <LinkFooter href="/" children="TV Show" />
            <LinkFooter href="/" children="Popular Vietnamese" />
            <LinkFooter href="/" children="Action" />
            <LinkFooter href="/" children="Test1 Vietnamese" />
          </div>
          <div className="">
            <HeadingFooter children="Heading" />
            <LinkFooter href="/" children="Vietnamese" />
            <LinkFooter href="/" children="America" />
            <LinkFooter href="/" children="Rusia" />
            <LinkFooter href="/" children="Japan Vietnamese" />
            <LinkFooter href="/" children="Korea" />
          </div>
          <div className="">
            <HeadingFooter children="Heading" />
            <LinkFooter href="/" children="Vietnamese America" />
            <LinkFooter href="/" children="America America" />
            <LinkFooter href="/" children="Rusia America" />
            <LinkFooter href="/" children="Japan America" />
            <LinkFooter href="/" children="Korea America" />
          </div>
          <div className="">
            <GroupContact />
          </div>
        </div>
        <div className="container mx-auto mt-6">
          <Line />
          <p className="text-sm text-left text-lineColor">@ Copyright 2022</p>
        </div>
      </div>
      <div className="flex items-center justify-center h-14 bg-headerColor text-zinc-400 md:hidden">
        Bui Ngoc Khanh
      </div>
    </div>
  );
};

export default Footer;
