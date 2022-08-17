import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/connection"}>
        <h3>Form</h3>
      </Link>
      <Link to={"/user"}>
        <h3>Details</h3>
      </Link>
    </div>
  );
}
export default Home;
