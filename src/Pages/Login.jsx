import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import favicon from '../assets/favicon.png';

export default function Login() {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/package");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password && role) {
      login(role);
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/package";
      localStorage.removeItem("redirectAfterLogin");
      navigate(redirectPath);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleSocialLogin = (provider) => {
    alert(`Dummy login with ${provider} clicked!`);
  };

  return (
    <div className="login-container">
  {/* Left Image Side */}
  <div className="login-image-side" aria-label="Login illustration">
    <img 
      src={favicon}
      alt="Login illustration" 
      style={{ width: '100%', height: 'auto' }} 
    />
  </div>
  {/* Right side: your login form here */}


      {/* Right Form Side */}
      <div className="login-form-side">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-description">
          Please login with your credentials or use one of the social logins below.
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Student">Student</option>
            <option value="Guest">Guest</option>
            <option value="Editor">Editor</option>
          </select>

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>

        <div className="divider">— or login with —</div>

        <div className="social-buttons">
          <button
            onClick={() => handleSocialLogin("Google")}
            className="social-button social-google"
            type="button"
          >
            Google
          </button>
          <button
            onClick={() => handleSocialLogin("Facebook")}
            className="social-button social-facebook"
            type="button"
          >
            Facebook
          </button>
          <button
            onClick={() => handleSocialLogin("Twitter")}
            className="social-button social-twitter"
            type="button"
          >
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
}
