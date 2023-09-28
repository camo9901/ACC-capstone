import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [seePassword, setSeePassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const json = await response.json();

      if (response.ok) {
        navigate("/");
      } else {
        setError(json.message);
      }
    } catch (error) {
      console.error("error", error);
      setError("wtf is going on");
    }
  };

  const handleSingUpClick = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="login_container">
        <div className="form_container">
          <div className="login_title">
            <h1>Sign In</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="login_user">
              <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="password_user">
              <input
                type={seePassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="show_passwrod"
                type="button"
                id="passwrodbtn"
                onClick={() => setSeePassword(!seePassword)}
              >
                {!seePassword ? (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1.3em"
                    width="1.3em"
                    className="d-block"
                    id="show_eye_pin"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1.3em"
                    width="1.3em"
                    id="hide_eye_pin"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                )}
              </button>
            </div>
            <div className="password_reset">
              <a href="/">Forgot password?</a>
            </div>
            <div className="login_submit">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="sign_up">
            <p>Need an account?</p>
            <button onClick={handleSingUpClick}> Sign Up! </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
