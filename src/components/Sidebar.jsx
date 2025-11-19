// src/components/Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

export default function Sidebar() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [animateSettings, setAnimateSettings] = useState(true);

  // ✅ Main Menu Items
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/app" },
    { name: "Tenants", icon: Building2, path: "/app/tenants" },
    { name: "Plans", icon: CreditCard, path: "/app/planssection" },
    { name: "Subscriptions", icon: RefreshCw, path: "/app/subscription" },
    { name: "Users", icon: Users, path: "/app/usersection" },
  ];

  // ✅ Settings Submenu Items
  const settingsSubmenu = [
    { name: "Store", icon: Store, path: "/app/storetab" },
    { name: "SMS/WhatsApp API", icon: MessageSquare, path: "/app/smsapi" },
    { name: "Tax List", icon: Percent, path: "/app/taxlistsection" },
    { name: "Units List", icon: List, path: "/app/unitlistsection" },
    {
      name: "Payment Types",
      icon: CreditCard,
      path: "/app/paymenttypesection",
    },
    { name: "Change Password", icon: Lock, path: "/app/changepass" },
  ];

  // ✅ Handle clicking on main menu items
  const handleMainMenuClick = () => {
    // close dropdown without animation
    setAnimateSettings(false);
    setSettingsOpen(false);
    setTimeout(() => setAnimateSettings(true), 300);
  };

  // ✅ Handle clicking Settings button
  const handleSettingsClick = () => {
    setAnimateSettings(true);
    setSettingsOpen((prev) => !prev);
  };

  return (
    <motion.aside
      className="
    fixed left-0 top-[64px]        
    w-64 h-[calc(100vh-64px)]        
    bg-white shadow-lg border-r border-gray-200
    flex flex-col
    z-40
    overflow-y-auto
    overflow-x-hidden
  "
    >
      <nav className="flex-1 overflow-hidden overflow-y-auto py-4 ">
        {/* ✅ Main Navigation */}
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            onClick={handleMainMenuClick}
            className={({ isActive }) =>
              `w-full flex items-center space-x-3 px-6 py-3 text-sm transition-all duration-200 rounded-r-full ${
                isActive
                  ? "bg-sky-100 text-sky-600 font-semibold border-r-4 border-sky-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}

        {/* ✅ Settings Dropdown */}
        <div className="mt-2">
          <button
            onClick={handleSettingsClick}
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

          {/* ✅ Dropdown with conditional animation */}
          <AnimatePresence>
            {settingsOpen && (
              <motion.div
                initial={animateSettings ? { opacity: 0, height: 0 } : false}
                animate={
                  animateSettings ? { opacity: 1, height: "auto" } : false
                }
                exit={animateSettings ? { opacity: 0, height: 0 } : false}
                transition={
                  animateSettings ? { duration: 0.3 } : { duration: 0 }
                }
                className="bg-gray-50 rounded-md shadow-inner overflow-hidden"
              >
                {settingsSubmenu.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    // 👇 no dropdown close on submenu click
                    className={({ isActive }) =>
                      `w-full flex items-center space-x-3 px-10 py-2.5 text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-sky-100 text-sky-600 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.aside>
  );
}
