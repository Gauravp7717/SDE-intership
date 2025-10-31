// layout/AppLayout.jsx
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <div className=" container mx-auto min-h-screen flex flex-col">
      {/* ✅ Navbar stays at the top */}
      <Header />
      <Navbar />
    </div>
  );
}
