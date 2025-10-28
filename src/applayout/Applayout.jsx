// layout/AppLayout.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import UnitList from "../pages/UnitList";
import { CarTaxiFront } from "lucide-react";
import TaxList from "../pages/TaxList";
import ChangePass from "../pages/ChangePass";
import StoreTab from "../pages/StoreTab";

export default function AppLayout() {
  return (
    <div className=" container mx-automin-h-screen flex flex-col">
      {/* ✅ Navbar stays at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unitlist" element={<UnitList />} />
          <Route path="/taxlist" element={<TaxList />} />
          <Route path="/changepass" element={<ChangePass />} />
          <Route path="/storetab" element={<StoreTab />} />
        </Routes>
      </main>
    </div>
  );
}
