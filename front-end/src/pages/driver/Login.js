import React from "react";

import { useState } from "react";
import Wrapper from "../../wrappers/register";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};
const DriverLogin = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, showAlert, displayAlert } = useAppContext();
  // global state and useNavigate
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, isMember } = values;
    if (!email || !password || !isMember) {
      displayAlert();
      return;
    }
    console.log(values);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h1>Login</h1>
        {showAlert && <Alert />}
        <FormRow
          type={"text"}
          name={"email"}
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type={"password"}
          name={"password"}
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Login
        </button>
        <button type="submit" className="btn btn-block">
          Register
        </button>
      </form>
    </Wrapper>
  );
};

export default DriverLogin;
