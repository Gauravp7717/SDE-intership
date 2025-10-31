import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  CreditCard,
  RefreshCw,
  Users,
  Settings,
  Store,
  MessageSquare,
  Percent,
  List,
  Lock,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import UnitList from "../pages/UnitList";
import PaymentType from "../pages/PaymentTypes";
import TaxList from "../pages/TaxList";
import ChangePass from "../pages/ChangePass";
import StoreTab from "../pages/StoreTab";
import Footer from "./Footer";
import DashboardScreen from "../pages/DashboardScreen";
import SmsApi from "../pages/SmsApi";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [settingsOpen, setSettingsOpen] = useState(false);

  // ✅ Routes
  const routeComponents = {
    "/unitlisttable": <UnitsListTable />,
    "/paymenttype": <PaymentType />,
    "/taxlist": <TaxList />,
    "/changepass": <ChangePass />,
    "/storetab": <StoreTab />,
    "/": <DashboardScreen />,
    "/smsapi": <SmsApi />,
  };

  const CurrentPage = routeComponents[location.pathname] || (
    <p className="text-gray-500 text-center py-8">Page not found</p>
  );

  // ✅ Menu Items
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Tenants", icon: Building2, path: "/tenants" },
    { name: "Plans", icon: CreditCard, path: "/plans" },
    { name: "Subscriptions", icon: RefreshCw, path: "/subscriptions" },
    { name: "Users", icon: Users, path: "/users" },
  ];

  const settingsSubmenu = [
    { name: "Store", icon: Store, path: "/storetab" },
    { name: "SMS/WhatsApp API", icon: MessageSquare, path: "/smsapi" },
    { name: "Tax List", icon: Percent, path: "/taxlist" },
    { name: "Units List", icon: List, path: "/unitlisttable" },
    // { name: "Units List", icon: List, path: "/unitlist" },
    { name: "Payment Types", icon: CreditCard, path: "/paymenttype" },
    { name: "Change Password", icon: Lock, path: "/changepass" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-64 bg-white shadow-lg flex flex-col border-r border-gray-200"
      >
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-sm transition-all duration-200 rounded-r-full ${
                location.pathname === item.path
                  ? "bg-sky-100 text-sky-600 font-semibold border-r-4 border-sky-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}

          {/* Settings Dropdown */}
          <div className="mt-2">
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className={`w-full flex items-center justify-between px-6 py-3 text-sm rounded-r-full transition-colors duration-200 ${
                settingsOpen
                  ? "bg-sky-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  settingsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {settingsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-md shadow-inner overflow-hidden"
                >
                  {settingsSubmenu.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => navigate(item.path)}
                      className={`w-full flex items-center space-x-3 px-10 py-2.5 text-sm transition-all duration-200 ${
                        location.pathname === item.path
                          ? "bg-sky-100 text-sky-600 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </motion.aside>

      {/* ✅ Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1 flex flex-col overflow-hidden"
      >
        <Home CurrentPage={CurrentPage} />
        <Footer />
      </motion.div>
    </div>
  );
}
