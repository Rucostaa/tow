import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Landing,
  Error,
  Login,
  Register,
  RegisterDriver,
  LoginDriver,
  DriverDashboard,
  DriverLanding,
  CompanyDashboard,
  LoginCompany,
  CompanyLanding,
  RegisterCompany,
  SharedLayout,
} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/driver" element={<SharedLayout />}>
          <Route path="login" element={<LoginDriver />} />
          <Route path="register" element={<RegisterDriver />} />
          <Route path="dashboard" element={<DriverDashboard />} />
        </Route>
        <Route path="/company" element={<SharedLayout />}>
          <Route path="login" element={<LoginCompany />} />
          <Route path="register" element={<RegisterCompany />} />
          <Route path="dashboard" element={<CompanyDashboard />} />
        </Route>
        <Route path="/registar" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
