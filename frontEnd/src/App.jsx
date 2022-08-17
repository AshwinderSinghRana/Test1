import react from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Connection from "./component/Connection";
import Home from "./component/Home";
import User from "./component/User";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/updateForm/:id" element={<Connection />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
