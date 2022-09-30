import React, { useState } from "react";
import "./change.css";

const Change = () => {
  const [ashu, setAshu] = useState();
  setInterval(() => {
    setAshu("green");
  }, 1000);
  return (
    <div>
      <h2 className={ashu} style={{ color: "red", marginTop: "8rem" }}>
        Ashwinder Singh Rana
      </h2>
    </div>
  );
};

export default Change;
