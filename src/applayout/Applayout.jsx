// layout/AppLayout.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import UnitList from "../pages/UnitList";
import { CarTaxiFront } from "lucide-react";
import TaxList from "../pages/TaxList";

export default function AppLayout() {
  return (
    <div className=" container mx-automin-h-screen flex flex-col">
      {/* ✅ Navbar stays at the top */}
      <Navbar />

      {/* ✅ Sidebar + Page Content go side-by-side below Navbar */}

      {/* Main content area */}
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unitlist" element={<UnitList />} />
          <Route path="/taxlist" element={<TaxList />} />
        </Routes>
      </main>
    </div>
  );
}
