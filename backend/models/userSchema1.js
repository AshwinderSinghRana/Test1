
const  mongoose  = require("mongoose")

const userSchema1 = new mongoose.Schema({

    product_id: {
        type: mongoose.ObjectId,
        ref: "product",
        required: true,
      },
    
    name:{
        type:String,
        required:true
    },
    email:{ type:String,
        required:true},
    mobile:{ type:String,
        required:true},
    
                
})
module.exports = new mongoose.model("products", userSchema1)


const  mongoose  = require("mongoose")

const userSchema2 = new mongoose.Schema({

    product_name: {
        type: mongoose.ObjectId,
        ref: "product",
        required: true,
      },
   
    product_id: {
        type: mongoose.ObjectId,
        ref: "product",
        required: true,
      },
    
    name:{
        type:String,
        required:true
    },
    email:{ type:String,
        required:true},
    mobile:{ type:String,
        required:true},
    
                
})
module.exports = new mongoose.model("products", userSchema2)


import React, { useState } from "react";

function Product() {
  const [data, setData] = useState();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {data?.forEach((e) => {
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>

                <button
                  class="btn btn-danger DeletesubCategory"
                  onChange={handleChange}
                >
                  Delete
                </button>
                <a
                  id="del"
                  class="btn btn-primary edit_company_btn"
                  type="button"
                >
                  Edit
                </a>
              </tr>
            </tbody>
          </table>
        </div>;
      })}
    </div>
  );
}

export default Product;
