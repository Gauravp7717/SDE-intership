import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";

export default function AppLayout() {
  const { logout } = useAuth();

  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      {/* ✅ Navbar with logout */}
      <Header onLogout={logout} />
      <SideBar />
    </div>
  );
}
