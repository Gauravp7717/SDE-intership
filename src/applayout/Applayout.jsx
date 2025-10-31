// layout/AppLayout.jsx
import SideBar from "../components/SideBar";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <div className=" container mx-auto min-h-screen flex flex-col">
      {/* ✅ Navbar stays at the top */}
      <Header />
      <SideBar />
    </div>
  );
}
