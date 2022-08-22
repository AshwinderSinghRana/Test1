import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Connection() {
  const ID = useParams().id;
  const [data, setData] = useState();
  const [mode, setMode] = useState("create");

  useEffect(() => {
    axios
      .get(`http://localhost:2222/user/${ID}`)
      .then((res) => {
        setData(res.data.result);
        console.log(res.data);
        setMode("update");
      })
      .catch((error) => console.log(error.message));
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(ID);
    if (mode === "update") {
      axios.put(`http://localhost:2222/user/${ID}`, data);
    } else {
      axios.post("http://localhost:2222/user/new", data);
    }
  };

  const handleClick = () => {
    Swal.fire({
      position: "top-middle",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div>
      <Link to={"/"}>
        <h4>Back</h4>
      </Link>
      <h1>Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={data?.name}
          onChange={handleChange}
        />
        <br />
        <input
          style={{ margin: "7px" }}
          type="text"
          name="email"
          placeholder="Enter your email"
          value={data?.email}
          onChange={handleChange}
        />
        <br />
        <input
          style={{ margin: "7px" }}
          type="number"
          name="mobile"
          placeholder="Enter your number"
          value={data?.mobile}
          onChange={handleChange}
        />
        <br />
        <input
          style={{ margin: "7px" }}
          type="password"
          name="password"
          placeholder="Enter your password"
          value={data?.password}
          onChange={handleChange}
        />
        <br />

        <input style={{ margin: "7px" }} type="submit" onClick={handleClick} />
      </form>
    </div>
  );
}

export default Connection;
