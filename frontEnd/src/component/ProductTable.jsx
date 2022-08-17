import axios from "axios";
import { React, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductTable() {
  const [data, setData] = useState();
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
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Link to={"/"}>
        <h4>Back</h4>
      </Link>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <fieldset enabled>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="disabledSelect">Category Select</Form.Label>
            <Form.Select name="category" id="disabledSelect">
              {category?.map((c) => (
                <option value={c._id}>{c.category}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label htmlFor="disabledSelect">
              Sub Category Select
            </Form.Label>
            <Form.Select id="disabledSelect">
              {subCategory?.map((c) =>
                c.categoryFK._id === data?.category ? (
                  <option>{c.subCategory}</option>
                ) : (
                  ""
                )
              )}
            </Form.Select>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
    </div>
  );
}

export default ProductTable;
