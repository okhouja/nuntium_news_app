import { React, useState, useEffect, useRef } from "react";

function Header(props) {
  return (
    <div>
      <div className="imgDivFather">
        <img
          id="img"
          className="logo"
          src="./img/Nuntuim_logo.svg"
          alt="logo"
        ></img>
      </div>
    </div>
  );
}
export default Header;
