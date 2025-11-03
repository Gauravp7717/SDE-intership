// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ✅ Load login state from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // ✅ Always set localStorage on login
  const login = (username = "User") => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
  };

  // ✅ Logout clears localStorage
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
