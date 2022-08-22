import react from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Captcha from "./component/Captcha";
import Connection from "./component/Connection";
import Home from "./component/Home";
import Login from "./component/Login";
import ProductTable from "./component/ProductTable";
import User from "./component/User";

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/connection" element={<Connection />} />
        <Route path="/updateForm/:id" element={<Connection />} />
        <Route path="/user" element={<User />} />
        <Route path="/productTable" element={<ProductTable />}></Route>
        <Route path="/captcha" element={<Captcha />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
