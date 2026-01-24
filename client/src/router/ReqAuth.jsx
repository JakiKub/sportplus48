import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ReqAuth = () => {
  const [ok, setOk] = useState(null);

  useEffect(() => {
    fetch("/api/check-session", { credentials: "include" })
      .then(res => res.json())
      .then(d => setOk(d.isLogged))
      .catch(() => setOk(false));
  }, []);

  if (ok === null) return null;
  if (!ok) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default ReqAuth;