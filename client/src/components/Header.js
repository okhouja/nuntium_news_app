import { React, useState, useEffect, useRef } from "react";

function Header(props) {
  return (
    <div>
      <div className="imgDivFather">
        <img
          id="img"
          className="logo"
          src="./img/Logo_Darkmode.svg"
          alt="logo"
        ></img>
      </div>
    </div>
  );
}
export default Header;
