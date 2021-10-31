import React from "react";

function Login() {
  return <div className="loginFather">
    <div className="inputFather">
    <label >User Name</label>
    <input type="text" name="username"/>
    </div>

    <div className="inputFather">
    <label >Password</label>
    <input className="loginPass" type="password" name="password" />
    </div>
    <button className="login" >Login</button>

  </div>;
}

export default Login;
