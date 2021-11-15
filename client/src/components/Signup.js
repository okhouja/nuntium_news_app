import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ConfPassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");

  axios.defaults.withCredentials = true;
  const signup = () => {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    data.append("ConfPassword", ConfPassword);
    data.append("email", email);

    axios
      .post("", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <div className="signUpWrapper">
        <form className="formFather" action="/" method="get">
          <div className="inputFather">
            <label>User Name</label>
            <input
              className="userName"
              type="text"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="inputFather">
            <label>Password</label>
            <input className="password" type="password" name="password" />
          </div>

          <div className="inputFather">
            <label>Confirm Password</label>
            <input className="passConf" type="password" name="confpassword" />
          </div>

          <div className="inputFather">
            <label>Email</label>
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
    </div>
  );
};

export default Signup;
