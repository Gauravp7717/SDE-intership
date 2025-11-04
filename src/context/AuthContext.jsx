import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // ✅ store role (storeadmin/superadmin)
  const [username, setUsername] = useState("");

  // 🧩 Dummy user data (temporary until backend)
  const dummyUsers = [
    { username: "storeadmin", password: "admin12", role: "storeadmin" },
    { username: "superadmin", password: "admin123", role: "superadmin" },
  ];

  // ✅ Load login state from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");

    if (loggedIn === "true" && storedUser && storedRole) {
      setIsAuthenticated(true);
      setUsername(storedUser);
      setUserRole(storedRole);
    }
  }, []);

  // ✅ Login function with dummy authentication
  const login = (inputUsername, inputPassword) => {
    const foundUser = dummyUsers.find(
      (user) =>
        user.username === inputUsername && user.password === inputPassword
    );

    if (foundUser) {
      // success
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", foundUser.username);
      localStorage.setItem("role", foundUser.role);

      setUsername(foundUser.username);
      setUserRole(foundUser.role);
      setIsAuthenticated(true);

      return { success: true, role: foundUser.role };
    } else {
      // failed login
      return { success: false, message: "Invalid credentials" };
    }
  };

  // ✅ Logout clears localStorage
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("role");

    setIsAuthenticated(false);
    setUsername("");
    setUserRole(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, username, userRole, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
