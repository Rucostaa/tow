import React, { useReducer, useContext } from "react";
import axios from "axios";
import reducer from "./reducer";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./action";
const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const inicialState = {
  isMember: false,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inicialState);
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response);
      const { user, token } = response.data;
      console.log(response.data);

      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } });
      //local Storage
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      //console.log(response);
      const { user, token } = data;
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });
      //local Storage
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const logoutUser = () => {};
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };
  const removeUserToLocalStorage = ({ user, token }) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, registerUser, loginUser }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, inicialState, useAppContext };
