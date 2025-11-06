import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

// ✅ Single unified layout
import AppLayout from "./layout/AppLayout";

// Super Admin pages
import Dashboard from "./pages/Dashboard";
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

// Store Admin pages
import StoreDashboard from "./pages/storeadminpages/StoreDashboard";
import Users from "./pages/storeadminpages/Users";
import RolesList from "./pages/storeadminpages/RolesList";
import Pos from "./pages/storeadminpages/Pos";
import AddSales from "./pages/storeadminpages/AddSales";
import SalesList from "./pages/storeadminpages/SalesList";
import SalesPayment from "./pages/storeadminpages/SalesPayment";
import SalesReturn from "./pages/storeadminpages/SalesReturn";
import AddCustomer from "./pages/storeadminpages/AddCustomer";
import CustomerList from "./pages/storeadminpages/CustomerList";
import SupplierList from "./pages/storeadminpages/SupplierList";
import AddSupplier from "./pages/storeadminpages/AddSupplier";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌐 Public Route */}
        <Route path="/" element={<Login />} />

        {/* ✅ SUPER ADMIN ROUTES */}
        <Route
          path="/app"
          element={
            <ProtectedRoute role="superadmin">
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

        {/* ✅ STORE ADMIN ROUTES */}
        <Route
          path="/store"
          element={
            <ProtectedRoute role="storeadmin">
              <AppLayout />
              {/* ✅ same layout — handles sidebar conditionally */}
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<StoreDashboard />} />
          <Route path="userlist" element={<Users />} />
          <Route path="roleslist" element={<RolesList />} />
          <Route path="pos" element={<Pos />} />
          <Route path="addsales" element={<AddSales />} />
          <Route path="saleslist" element={<SalesList />} />
          <Route path="salespayment" element={<SalesPayment />} />
          <Route path="salesreturnlist" element={<SalesReturn />} />
          <Route path="addcustomer" element={<AddCustomer />} />
          <Route path="customerlist" element={<CustomerList />} />
          <Route path="supplierlist" element={<SupplierList />} />
          <Route path="addsupplier" element={<AddSupplier />} />
        </Route>

        {/* 🚧 Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
