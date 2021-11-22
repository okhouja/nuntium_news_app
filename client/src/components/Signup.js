import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ConfPassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");

  axios.defaults.withCredentials = true;
  const register = () => {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    data.append("ConfPassword", ConfPassword);
    data.append("email", email);

    axios
      .post("http://localhost:5000/signup", data, {
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
        <h3>Register in Nuntium</h3>
        <form className="formFather">
          <div className="inputFather">
            <label>Username :</label>
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
            <label>Email :</label>
            <input
              className="email"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div className="inputFather">
            <label>Password :</label>
            <input
              className="password"
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div className="inputFather">
            <label>Confirm Password :</label>
            <input
              className="passConf"
              type="password"
              value={ConfPassword}
              name="confPassword"
              onChange={(e) => setConfPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>

          <div>
            <button className="submit" onClick={register}>
              Register
            </button>
          </div>
          <Link to="/login" className="submit">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
