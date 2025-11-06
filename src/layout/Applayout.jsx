<<<<<<< HEAD
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StoreAdminSidebar from "../components/StoreAdminSidebar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

export default function AppLayout() {
  const { isAuthenticated, userRole } = useAuth();

  // 🧠 Redirect unauthenticated users
  if (!isAuthenticated) return <Navigate to="/" replace />;

  // 🧩 Role-based routing and layout selection
  let SidebarComponent = null;
  let redirectPath = null;

  if (userRole === "superadmin") {
    SidebarComponent = Sidebar;
  } else if (userRole === "storeadmin") {
    SidebarComponent = StoreAdminSidebar;
  } else {
    // 🚫 Unknown role → redirect to home or login
    redirectPath = "/";
  }

  if (redirectPath) return <Navigate to={redirectPath} replace />;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SidebarComponent />
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
=======
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StoreAdminSidebar from "../components/StoreAdminSidebar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

export default function AppLayout() {
  const { isAuthenticated, userRole } = useAuth();

  // 🧠 Redirect unauthenticated users
  if (!isAuthenticated) return <Navigate to="/" replace />;

  // 🧩 Role-based routing and layout selection
  let SidebarComponent = null;
  let redirectPath = null;

  if (userRole === "superadmin") {
    SidebarComponent = Sidebar;
  } else if (userRole === "storeadmin") {
    SidebarComponent = StoreAdminSidebar;
  } else {
    // 🚫 Unknown role → redirect to home or login
    redirectPath = "/";
  }

  if (redirectPath) return <Navigate to={redirectPath} replace />;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SidebarComponent />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
>>>>>>> adding/dashboard
