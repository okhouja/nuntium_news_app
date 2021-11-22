import { React , useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  useEffect(() => {
    
    
  }, []);

  return (
    <div>
      <div className="signUpWrapper">
        <form className="formFather" action="/" method="get">
          <div className="inputFatherSignup">
            <label className="labelsignup">User Name</label>
            <input className="userName" type="text" name="username" />
          </div>
          <div  className="inputFatherSignup">
            <label className="labelsignup">Password</label>
            <input className="password" type="password" name="password" />
          </div>

          <div  className="inputFatherSignup">
            <label className="labelsignup">Confirm Password</label>
            <input className="passConf" type="password" name="confpassword" />
          </div>

          <div  className="inputFatherSignup">
            <label className="labelsignup">Email</label>
            <input className="email" type="email" name="email" />
          </div>

          <div>
            <input className="submit" type="submit" value="Add user" />
          </div>
          <div>
            <input className="clear" type="reset" value="Clear" />
          </div>

        </form>

      </div>
      <Link className="backLinksignup" to="/home"><p className="back">Back</p></Link>

    </div>
  );
}

export default Signup;
