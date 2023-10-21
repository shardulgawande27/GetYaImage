import React from "react";
import "./header.css";

const Header = ({ children }) => {
  return (
    <div className=" head flex items-center py-10  ">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-2xl font-bold ">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Header;
