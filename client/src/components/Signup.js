import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {StoreContext} from "../context/index"

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ConfPassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");
  const contextObj = useContext(StoreContext);

  axios.defaults.withCredentials = true;
  const register = (e) => {
    e.preventDefault();

    // const data = new FormData();
    // data.append("username", username);
    // data.append("password", password);
    // data.append("ConfPassword", ConfPassword);
    // data.append("email", email);

    const data = { username, password, email };
    console.log(data);
    axios
      .post("http://localhost:5000/signup", data, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div >
      <div className="signUpWrapper">
        
        <form className="formFather">
        <h3>Register in Nuntium</h3>
          <div className="inputFatherSignup">
            <label className="labelSignup">Username :</label>
            <input
              className="userName"
              type="text"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="inputFatherSignup">
            <label className="labelSignup" >Email :</label>
            <input
              className="email"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div className="inputFatherSignup">
            <label className="labelSignup">Password :</label>
            <input
              className="password"
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div className="inputFatherSignup">
            <label className="labelSignup">Confirm Password :</label>
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
        <Link  to="/home"><p className="backSignUp" >Back</p></Link>
      </div>
    </div>
  );
};

export default Register;
