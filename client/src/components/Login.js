import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginFather">
      <div className="inputFatherLogin">
        <label>User Name</label>
        <input className="usernameLogin" type="text" name="username" />
      </div>

      <div className="inputFatherLogin">
        <label className="passwordLogin">Password</label>
        <input className="loginPass" type="password" name="password" />
      </div>
      <button className="login">Login</button>
      <Link className="backLinksignup" to="/home"><p className="back">Back</p></Link>

    </div>
  );
}

export default Login;
