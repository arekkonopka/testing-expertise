import { isEmpty } from "lodash";

const isAuth = () => {
  const login = window.localStorage.getItem("login");
  const password = window.localStorage.getItem("password");
  if (!isEmpty(login) && !isEmpty(password)) {
    return true;
  } else {
    return false;
  }
};

export default isAuth;
