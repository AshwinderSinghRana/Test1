import React from "react";

function Login() {
  return (
    <div>
      <form>
        <h2>Login</h2>
        <div className="input-container mb-2 ">
          <label className="me-2">Email </label>
          <input type="email" name="email" />
        </div>
        <div className="input-container">
          <label className="me-2">Password </label>
          <input type="password" name="password" />
        </div>
        <div className="button-container mt-2">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;
