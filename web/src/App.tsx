import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";
import { useContext } from "react";

function App() {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  console.log(isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        isAdmin ? (
          <Navigate to="/admin" />
        ) : (
          <>
            <Outlet />
            <Navigate to="/app" />
          </>
        )
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
}

export default App;
