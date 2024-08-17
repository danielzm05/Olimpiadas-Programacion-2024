import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export function ProtectedRoute({ isAuth, roles, children, redirectTo = "/", userRol }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuth !== undefined && userRol !== undefined) {
      setLoading(false);
    }
  }, [isAuth, userRol]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (isAuth && roles.includes(userRol)) {
    return children ? children : <Outlet />;
  } else {
    return <Navigate to={redirectTo} />;
  }
}
