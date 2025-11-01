import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ Check login status + restore user data on app load
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const storedName = localStorage.getItem("userName");

    if (loggedIn === "true" && storedName) {
      setIsAuthenticated(true);
      setUser({ name: storedName });
    }
  }, []);

  // ✅ Login (store user info)
  const login = (name = "User") => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", name);
    setIsAuthenticated(true);
    setUser({ name });
  };

  // ✅ Logout (clear user info)
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
