import React from "react";
import { Link } from "react-router-dom";
// import { auth } from "./firebase";
import "./Login.css";

function Login() {
  // const login = (event) => {
  //   const history = useHistory();
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   event.preventDefault(); // this defends from refresh
  //   // do the login logic

  //   auth
  //     .signInWithPassword(email, password)
  //     .then((auth) => {
  //       // logged in, redirect to Homepage...
  //       history.push("/");
  //     })
  //     .catch((e) => alert(e.message));
  // };
  // const register = (event) => {
  //   event.preventDefault(); // this defends from refresh
  //   // do the register logic

  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       // create a user and logged in, redirect to Homepage
  //       history.push("/");
  //     })
  //     .catch((e) => alert(e.message));
  // };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton" type="submit">
            Sign In
          </button>
          <p>
            by signing-in you agree to Amazon Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based
            Ads Notice.
          </p>
          <button className="registerButton">Create Your Amazon Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
