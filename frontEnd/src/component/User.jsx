import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function User() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:1234/user`)
      .then((res) => {
        setUser(res.data.result);
        console.log(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:1234/user/${id}`);
    alert("Data Deleted");
    location.reload();
  };

  return (
    <div className="row">
      <Link to={"/"}>
        <h4>Back</h4>
      </Link>
      {user?.map((pro) => (
        <div className="col-3">
          <Card
            style={{
              width: "18rem",
              backgroundColor: "crimson",
              padding: "10px",
              margin: "10px",
              gap: "6px",
            }}
          >
            <ListGroup variant="flush">
              <ListGroup.Item>{pro.name}</ListGroup.Item>
              <ListGroup.Item>{pro.email}</ListGroup.Item>
              <ListGroup.Item>{pro.mobile}</ListGroup.Item>
              <ListGroup.Item>{pro.password}</ListGroup.Item>
            </ListGroup>
            <button
              style={{ backgroundColor: "grey" }}
              onClick={() => {
                handleDelete(pro._id);
              }}
            >
              Delete
            </button>
            <button
              style={{ backgroundColor: "grey" }}
              onClick={() => {
                navigate(`/updateForm/${pro._id}`);
              }}
            >
              Update
            </button>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default User;
