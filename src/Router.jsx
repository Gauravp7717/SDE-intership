import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import AppLayout from "./layout/Applayout";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";

import Tenants from "./pages/Tenants";
import PlansSection from "./pages/PlansSection";
import Subscription from "./pages/Subscription";
import UsersSection from "./pages/UsersSection";
import StoreTab from "./pages/StoreTab";
import SmsApi from "./pages/SmsApi";
import TaxlistSection from "./pages/TaxlistSection";
import UnitListSection from "./pages/UnitListSection";
import PaymentTypeSection from "./pages/PaymentTypeSection";
import ChangePass from "./pages/ChangePass";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="tenants" element={<Tenants />} />
          <Route path="planssection" element={<PlansSection />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="usersection" element={<UsersSection />} />
          <Route path="storetab" element={<StoreTab />} />
          <Route path="smsapi" element={<SmsApi />} />
          <Route path="taxlistsection" element={<TaxlistSection />} />
          <Route path="unitlistsection" element={<UnitListSection />} />
          <Route path="paymenttypesection" element={<PaymentTypeSection />} />
          <Route path="changepass" element={<ChangePass />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
