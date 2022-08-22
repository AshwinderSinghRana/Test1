import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState();
  const [msg, setMsg] = useState();
  const Navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // useEffect(() => {
  //   axios.post("http://localhost:2222/auth").then((e) => {
  //     setData(e.data.result);
  //   });
  // }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2222/auth", data)
      .then((res) => {
        if (res.data.status === 1234) {
          console.log("Login Success");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "LogIn SuccessFully",
            timer: 1500,
          });
          Navigate("/user");
        } else {
          Swal.fire({
            position: "center",
            // icon: 'Failed',
            title: "Incorrect user Id or password",
            timer: 2500,
          });
        }
        console.log(res.data);
        setMsg([res.data]);
      })
      .catch((er) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${er}`,
          timer: 1500,
        });
      });
    // console.log(msg);
  };

  return (
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
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
};

export default Login;
