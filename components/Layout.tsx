import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-[calc(100%-120px)]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
