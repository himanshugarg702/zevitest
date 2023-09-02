import React from "react";
import zevi_logo from "../Themes/SVGs/zevi_logo_svg.svg";
import '../styles/HomeHeader.scss';
const HomeHeader = () => {
  return (
    <div className="home_header">
      <img src={zevi_logo} alt="" />
    </div>
  );
};

export default HomeHeader;
