import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);
  // Track whether we've loaded persisted auth from storage to avoid
  // redirecting protected routes before hydration completes.
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);

  // ✅ Load saved auth data from localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedRole = localStorage.getItem("userRole");
    const storedAuth = localStorage.getItem("isAuthenticated");

    if (storedAuth === "true" && storedUser && storedRole) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
      setUserRole(storedRole);
    }

    // Mark hydration complete whether or not we found stored auth.
    setIsAuthLoaded(true);
  }, []);

  // ✅ Login function
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setUserRole(userData.role);

    // 🔒 Save to localStorage
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("userRole", userData.role);
  };

  // ✅ Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setUserRole(null);

    // 🧹 Clear everything from localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userRole, user, login, logout, isAuthLoaded }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
