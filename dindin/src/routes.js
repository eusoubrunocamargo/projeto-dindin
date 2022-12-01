import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import SignIn from '../src/Pages/SignIn';
import Main from '../src/Pages/Main';
import Dashboard from '../src/Pages/Dashboard';
import { getItem } from "./utils/storage";

const ProtectedRoutes = ({ redirectTo }) => {
  const isAuthenticated = getItem("token");

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
};

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignIn />} />
      </Route>
      <Route path="/login" element={<Main />} />

      <Route element={<ProtectedRoutes redirectTo="/login" />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
