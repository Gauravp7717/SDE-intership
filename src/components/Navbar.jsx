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
  Menu,
  Shield,
} from "lucide-react";
import Home from "../pages/Home";
import UnitList from "../pages/UnitList";
import PaymentType from "../pages/PaymentTypes";
import TaxList from "../pages/TaxList";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const routeComponents = {
    "/": <Home />,
    "/unitlist": <UnitList />,
    "/paymenttype": <PaymentType />,
    "/taxlist": <TaxList />,
  };
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Tenants", icon: Building2, path: "/tenants" },
    { name: "Plans", icon: CreditCard, path: "/plans" },
    { name: "Subscriptions", icon: RefreshCw, path: "/subscriptions" },
    { name: "Users", icon: Users, path: "/users" },
  ];

  const settingsSubmenu = [
    { name: "Store", icon: Store, path: "/store" },
    { name: "SMS/WhatsApp API", icon: MessageSquare, path: "/smsapi" },
    { name: "Tax List", icon: Percent, path: "/taxlist" },
    { name: "Units List", icon: List, path: "/unitlist" },
    { name: "Payment Types", icon: CreditCard, path: "/paymenttype" },
    { name: "Change Password", icon: Lock, path: "/changepassword" },
  ];

  const CurrentPage = routeComponents[location.pathname] || (
    <p className="text-gray-500">Page not found</p>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        {/* Logo */}
        <div className="p-3 border-b border-gray-200 flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Transactly
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-sm transition-colors ${
                location.pathname === item.path
                  ? "bg-sky-50 text-sky-600 border-r-4 border-sky-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}

          {/* Settings Dropdown */}
          <div>
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className={`w-full flex items-center justify-between px-6 py-3 text-sm transition-colors ${
                settingsOpen
                  ? "bg-sky-600 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5" />
                <span className="font-medium">Settings</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  settingsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {settingsOpen && (
              <div className="bg-gray-50">
                {settingsSubmenu.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.path)}
                    className={`w-full flex items-center space-x-3 px-10 py-2.5 text-sm transition-colors ${
                      location.pathname === item.path
                        ? "bg-sky-100 text-sky-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex justify-end items-center">
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800">
                Nikhilkhatate
              </p>
              <p className="text-xs text-gray-500">(Super Admin)</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-sm">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <span className="hover:text-sky-600 cursor-pointer">🏠 Home</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">
                {location.pathname === "/"
                  ? "Dashboard"
                  : location.pathname
                      .replace("/", "")
                      .replace(/^\w/, (c) => c.toUpperCase())}
              </span>
            </div>

            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              {location.pathname === "/"
                ? "Dashboard"
                : location.pathname
                    .replace("/", "")
                    .replace(/^\w/, (c) => c.toUpperCase())}
            </h1>

            {/* Dynamic Content Area */}
            <div>{CurrentPage}</div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-4 flex justify-between items-center text-sm text-gray-600">
          <span>Copyright © 2025 All rights reserved.</span>
          <span>Prepurchase -v3.0</span>
        </footer>
      </div>
    </div>
  );
}
