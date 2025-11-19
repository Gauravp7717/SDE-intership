import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StoreAdminSidebar from "../components/StoreAdminSidebar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import Pos from "../pages/storeadminpages/Pos";

export default function AppLayout() {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) return <Navigate to="/" replace />;

  let SidebarComponent = null;
  let redirectPath = null;

  if (userRole === "superadmin") {
    SidebarComponent = Sidebar;
  } else if (userRole === "storeadmin") {
    SidebarComponent = StoreAdminSidebar;
  } else {
    redirectPath = "/";
  }

  if (redirectPath) return <Navigate to={redirectPath} replace />;

  return (
    <div className="w-full h-screen overflow-hidden bg-gray-100">
      {/* 🔥 FIXED HEADER */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* 🔥 FIXED SIDEBAR — positioned below header */}
      <div className="fixed top-[64px] left-0 w-64 h-[calc(100vh-64px)]  bg-white z-40 overflow-y-auto overflow-x-hidden sidebar-hidden-scroll pt-3">
        <SidebarComponent />
      </div>

      {/* 🔥 SCROLLABLE CONTENT AREA ONLY */}
      <main
        className="
            ml-64 
            mt-[64px]
            h-[calc(100vh-64px)]
            overflow-y-auto
            p-6   
            bg-white
          "
      >
        <Outlet />
      </main>
    </div>
  );
}
