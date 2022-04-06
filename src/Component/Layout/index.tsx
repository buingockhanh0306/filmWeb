import React from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-primaryColor">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
