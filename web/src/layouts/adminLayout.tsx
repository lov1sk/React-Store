import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

export function AdminLayout() {
  const { isAdmin } = useContext(AuthContext);
  return <>{isAdmin ? <Outlet /> : <Navigate to="/login" />}</>;
}
