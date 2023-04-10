import React from "react";
import Wrapper from "../wrappers/shared-layout";
import { Link, Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to={"login"}>Iniciar Sessão</Link>
        <Link to={"register"}>Registar</Link>
        <Link to={"dashboard"}>Dashboard</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
