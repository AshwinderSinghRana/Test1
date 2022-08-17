import axios from "axios";
import { React, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductTable() {
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  useEffect(() => {
    axios(`http://localhost:1234/category`)
      .then((e) => {
        setCategory(e.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios(`http://localhost:1234/subCategory`)
      .then((e) => {
        setSubCategory(e.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category, subCategory);
  };
  const handleChange = () => {};

  return (
    <div>
      <Link to={"/"}>
        <h4>Back</h4>
      </Link>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <fieldset enabled>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="disabledSelect">Category Select</Form.Label>
            <Form.Select id="disabledSelect">
              {category?.map((c) => (
                <option>{c.category}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label htmlFor="disabledSelect">
              Sub Category Select
            </Form.Label>
            <Form.Select id="disabledSelect">
              <option>Electronics</option>
              <option>Sports</option>
              <option>Toys</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
    </div>
  );
}

export default ProductTable;
