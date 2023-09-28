import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/register.css";

function RegisterPage() {
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [error, setError] = useState(null); // Add a state to handle errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
          name: {
            firstname: formData.firstName,
            lastname: formData.lastName,
          },
          phone: formData.phone,
        }),
      });
      const json = await response.json();

      if (response.ok) {
        navigate("/login");
      } else {
        setError(json.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="register_container">
        <div className="register_form">
          <div className="register_title">
            <h1>Register</h1>
          </div>

          <h4 className="personal_title">Personal information</h4>

          <form onSubmit={handleSubmit}>
            <div className="personal_info">
              <div className="register_name">
                <label>
                  First Name{" "}
                  <svg
                    width="9px"
                    height="9px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 4V20M19 7L5 17M5 7L19 17"
                        stroke="#b80000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />
              </div>

              <div className="register_lastname">
                <label>
                  Last Name{" "}
                  <svg
                    width="9px"
                    height="9px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 4V20M19 7L5 17M5 7L19 17"
                        stroke="#b80000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                />
              </div>
            </div>

            <div className="login_info">
              <div className="register_username">
                <label>
                  Username{" "}
                  <svg
                    width="9px"
                    height="9px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 4V20M19 7L5 17M5 7L19 17"
                        stroke="#b80000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  value={formData.username}
                  required
                />
              </div>

              <div className="register_password">
                <label>
                  Password{" "}
                  <svg
                    width="9px"
                    height="9px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 4V20M19 7L5 17M5 7L19 17"
                        stroke="#b80000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </label>
                <input
                  type={seePassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
                <button
                  className="register_pass"
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
            </div>

            <h4 className="register_contact">Contact Details</h4>

            <div className="contact_info">
              <div className="register_email">
                <label>
                  Email{" "}
                  <svg
                    width="9px"
                    height="9px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 4V20M19 7L5 17M5 7L19 17"
                        stroke="#b80000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>

              <div className="register_phone">
                <label>
                  Phone Number{" "}
                  <svg
                    width="9px"
                    height="9px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 4V20M19 7L5 17M5 7L19 17"
                        stroke="#b80000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  value={formData.phone}
                  required
                />
              </div>
            </div>

            <div className="register_terms">
              <input type="checkbox" /> I accept terms & conditions{" "}
              <svg
                width="9px"
                height="9px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "rotate(45deg)" }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 4V20M19 7L5 17M5 7L19 17"
                    stroke="#b80000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          </form>

          <div className="register_submit">
            <button type="submit" onClick={handleSubmit}>
              Create Account
            </button>
          </div>

          <div className="register_login">
            <p>Already have an account?</p>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
