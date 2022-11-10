import React from "react";
import "./Login.css";

function Login() {
  return (
    <main className="container-fluid">
      <div className=" Login-Page row p-0">
        <section className=" col-md-6 p-0 ">
          <img
            className="login-image"
            src="https://cdn.cms-twdigitalassets.com/content/dam/legal-twitter/privacy-policy-2022/Twitter-terms-of-service-share.jpg.twimg.768.jpg"
            alt="error image not found"
          />
        </section>
        <section className=" col-md-6 d-flex flex-column Login-Element justify-content-center">
          <h1>
            <b>Happening now</b>
          </h1>
          <h3>
            <b>Join twitter today.</b>
          </h3>

          <input
            className="search-bar rounded-pill w-50"
            type="text"
            placeholder="Username or Email"
          />
          <br />
          <input
            className="search-bar rounded-pill w-50"
            type="password"
            placeholder="Password"
          />
          <br />

          <button className="btn btn-primary rounded-pill Tweet-Button">
            <b>LogIn</b>
          </button>
        </section>
      </div>
    </main>
  );
}
export default Login;
