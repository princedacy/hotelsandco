import React from "react";
import Topnav from "./Topnav";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="top-0 z-50 bg-white shadow-sm sticky">
      <Topnav/>
      <Navbar/>
    </div>
  );
}

export default Header;
