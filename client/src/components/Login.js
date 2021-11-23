import { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  axios.defaults.withCredentials = true;
  const loginUser = () => {
    axios
      .post("http://localhost:5000/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.user) {
          localStorage.setItem("token", res.data.token);
          setLoginMessage(`Welcome Back ${res.data.user.username}`);
        } else {
          setLoginMessage(res.data.message);
        }
      });
  };

  return (
    <div className="loginFather">
      <div className="inputFather">
        <label>User Name</label>
        <input
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>

      <div className="inputFather">
        <label>Password</label>
        <input
          className="loginPass"
          value={password}
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <button className="login" onClick={loginUser}>
        Login
      </button>
      <h4>{loginMessage}</h4>
    </div>
  );
}

export default Login;
