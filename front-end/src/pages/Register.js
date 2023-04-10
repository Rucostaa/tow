import { useState, useEffect } from "react";
import React from "react";
import Wrapper from "../wrappers/register";
import { useNavigate } from "react-router-dom";
import { FormRow, Alert } from "../components";
import { useAppContext } from "../context/appContext";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
  isLoading: false,
  showAlert: false,
};
const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser } =
    useAppContext();
  // global state and useNavigate
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!name || !email || !password) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      console.log("Already a Member");
    } else {
      registerUser(currentUser);
    }
    console.log(values);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h1>Tow</h1>
        <h1>Register</h1>
        {showAlert && <Alert />}
        <FormRow
          type={"text"}
          name={"name"}
          value={values.name}
          handleChange={handleChange}
        />
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
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Registar
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
