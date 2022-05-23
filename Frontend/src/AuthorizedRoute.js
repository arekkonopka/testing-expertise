import { Outlet, Navigate } from "react-router-dom";
import isAuth from "./utils/isAuth";

const AuthorizedRoute = () => {
  console.log("isAuth()", isAuth());
  return isAuth() ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthorizedRoute;
