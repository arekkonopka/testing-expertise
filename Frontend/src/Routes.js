import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthorizedRoute from "./AuthorizedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<AuthorizedRoute />}>
        <Route exact path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
