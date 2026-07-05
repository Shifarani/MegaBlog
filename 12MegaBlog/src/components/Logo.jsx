import React from "react";
import logo from "../assets/logo2.png";

function Logo({ width = "250px" }) {
  return (
    <div className="flex justify-start">
      <img
        src={logo}
        alt="Mega Blog"
        style={{ width }}
        className="h-auto object-contain"
      />
    </div>
  );
}

export default Logo;