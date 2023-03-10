import { Route, Router, Routes } from "react-router-dom";
import Admin from "../Pages/Admin/Admin";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin"  element={<Admin/>}  />
    </Routes>
  );
}
