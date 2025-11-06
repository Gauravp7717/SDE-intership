import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ role, children }) {
  const { isAuthenticated, userRole, isAuthLoaded } = useAuth();

  // Wait for auth hydration from storage before deciding to redirect.
  // While loading, render null (or a loader) so the app doesn't flash to login.
  if (!isAuthLoaded) return null;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (role && userRole !== role) {
    // Redirect based on actual role
    return userRole === "storeadmin" ? (
      <Navigate to="/store" replace />
    ) : (
      <Navigate to="/app" replace />
    );
  }

  return children;
}
