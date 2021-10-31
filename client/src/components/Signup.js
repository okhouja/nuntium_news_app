import React from "react";



function Signup() {

  return <div >
    <div className="signUpWrapper">
    <form className="formFather" action="/" method="get">
      <div className="inputFather">
      <label  >User Name</label>
      <input className="userName" type="text" name="username" />
      </div>
      <div className="inputFather">

      <label  >Password</label>
      <input className="password" type="password" name="password" />
      </div>

      <div className="inputFather">

      <label  >Confirm Password</label>
      <input className="passConf" type="password" name="confpassword" />
      </div>

      <div className="inputFather">

      <label  >Email</label>
      <input className="email" type="email"name="email"/>
      </div>

<div>
        <input className="submit" type="submit" value="Add user" />
        </div>
        <div>
        <input className="clear" type="reset" value="Clear" />
        </div>
    </form>
  </div>
  </div>;
}

export default Signup;
