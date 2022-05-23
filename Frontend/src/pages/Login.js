import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onChangeLogin = (e) =>
    window.localStorage.setItem("login", e.target.value);
  const onChangePassword = (e) =>
    window.localStorage.setItem("password", e.target.value);

  const onClickButton = () => {
    const login = window.localStorage.getItem("login");
    const password = window.localStorage.getItem("login");
    if (login !== "" && password !== "") {
      navigate("/");
    }
  };

  return (
    <form>
      <label>
        login
        <input onChange={onChangeLogin} />
      </label>
      <label>
        password
        <input onChange={onChangePassword} />
      </label>
      <button onClick={onClickButton}>submit</button>
    </form>
  );
};

export default Login;
