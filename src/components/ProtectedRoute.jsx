// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // ✅ Keep user logged in even after refresh
  const storedLogin = localStorage.getItem("isLoggedIn") === "true";

  if (isAuthenticated || storedLogin) {
    return children;
  }

  return <Navigate to="/" replace />;
}
