import React from "react";
import Header from "../common/Header/Header";
import Layouts from "../common/Layout";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <>
      <Header />
      <Layouts>
        <LoginForm />
      </Layouts>
    </>
  );
};

export default Login;
