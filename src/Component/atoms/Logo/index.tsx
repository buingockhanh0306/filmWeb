import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <img
        className="w-32 h-full mr-8 cursor-pointer"
        src="/images/logo.png"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
