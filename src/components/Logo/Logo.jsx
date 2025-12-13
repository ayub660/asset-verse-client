import React from "react";
import lotoImg from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="p-0 m-0 flex justify-center items-center">
      <img className="w-20 md:w-40 p-0 m-0" src={lotoImg} alt="" />
    </Link>
  );
};

export default Logo;
