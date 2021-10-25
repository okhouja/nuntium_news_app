import React from "react";
import { Redirect } from "react-router-dom";



function Signup() {

  return <div>
    <form action="./" method="get">
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="password" name="confpassword" />
      <inpt type="email"name="email"/>
        <input type="submit" value="Add user" />
        <input type="reset" value="Clear" />



    </form>
  </div>;
}

export default Signup;
