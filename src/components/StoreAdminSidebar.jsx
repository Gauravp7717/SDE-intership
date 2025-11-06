<<<<<<< HEAD
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  BarChart,
  Package,
  Users,
  Settings,
  ChevronDown,
  Store,
  Truck,
  CreditCard,
  Percent,
  Lock,
  MessageSquare,
  List,
  CirclePlus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoreAdminSidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // ✅ Main Menu Items
  const mainMenu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/store/dashboard" },
  ];

  // ✅ Dropdown Menus
  const dropdownMenus = [
    {
      id: "users",
      name: "Users",
      icon: Store,
      submenu: [
        { name: "Userlist", path: "/store/userlist", icon: List },
        { name: "RolesList", path: "/store/rolesList", icon: List },
      ],
    },
    {
      id: "sales",
      name: "Sales Management",
      icon: CreditCard,
      submenu: [
        { name: "POS", path: "/store/pos", icon: CirclePlus },
        { name: "ADD SALES", path: "/store/addsales", icon: CirclePlus },
        { name: "Sales List", path: "/store/saleslist", icon: List },
        { name: "Sales Payment", path: "/store/salespayment", icon: List },
        {
          name: "Sales Return list",
          path: "/store/salesreturnlist",
          icon: List,
        },
      ],
    },
    {
      id: "Contacts",
      name: "Contacts",
      icon: Truck,
      submenu: [
        { name: "Add Customer", path: "/store/addcustomer", icon: CirclePlus },
        {
          name: "Customer List",
          path: "/store/customerlist",
          icon: List,
        },
        { name: "Add Supplier", path: "/store/addsupplier", icon: CirclePlus },
        { name: "Supplier List", path: "/store/supplierlist", icon: List },
      ],
    },
    {
      id: "settings",
      name: "Settings",
      icon: Settings,
      submenu: [
        { name: "Store Info", path: "/store/settings/info", icon: List },
        { name: "Tax List", path: "/store/settings/tax", icon: List },
        { name: "Payment Types", path: "/store/settings/payment", icon: List },
        { name: "Units List", path: "/store/settings/units", icon: List },
      ],
    },
    {
      id: "account",
      name: "Account",
      icon: Lock,
      submenu: [
        { name: "Profile", path: "/store/profile", icon: List },
        { name: "Notifications", path: "/store/notifications", icon: List },
        { name: "Change Password", path: "/store/change-password", icon: List },
        { name: "Support", path: "/store/support", icon: List },
      ],
    },
  ];

  // ✅ Handle Dropdown Toggle
  const handleDropdownClick = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  // ✅ Handle Main Menu Click
  const handleMainMenuClick = () => {
    setOpenDropdown(null);
  };

  return (
    <motion.aside className="w-64 bg-white shadow-lg flex flex-col border-r border-gray-200">
      <nav className="flex-1 overflow-y-auto py-4">
        {/* ✅ Main Menu */}
        {mainMenu.map((item) => (
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

        {/* ✅ Dropdown Menus */}
        {dropdownMenus.map((menu) => (
          <div key={menu.id} className="mt-2">
            <button
              onClick={() => handleDropdownClick(menu.id)}
              className={`w-full flex items-center justify-between px-6 py-3 text-sm rounded-r-full transition-colors duration-200 ${
                openDropdown === menu.id
                  ? "bg-sky-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center space-x-3">
                <menu.icon className="w-5 h-5" />
                <span>{menu.name}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  openDropdown === menu.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* ✅ Animated Submenu */}
            <AnimatePresence>
              {openDropdown === menu.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-md shadow-inner overflow-hidden"
                >
                  {menu.submenu.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      className={({ isActive }) =>
                        `w-full flex items-center space-x-3 px-10 py-2.5 text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-sky-100 text-sky-600 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`
                      }
                    >
                      {sub.icon && <sub.icon className="w-4 h-4" />}
                      <span>{sub.name}</span>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
    </motion.aside>
  );
}
=======
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  BarChart,
  Package,
  Users,
  Settings,
  ChevronDown,
  Store,
  Truck,
  CreditCard,
  Percent,
  Lock,
  MessageSquare,
  List,
  CirclePlus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoreAdminSidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // ✅ Main Menu Items
  const mainMenu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/store/dashboard" },
  ];

  // ✅ Dropdown Menus
  const dropdownMenus = [
    {
      id: "users",
      name: "Users",
      icon: Store,
      submenu: [
        { name: "Userlist", path: "/store/userlist", icon: List },
        { name: "RolesList", path: "/store/rolesList", icon: List },
      ],
    },
    {
      id: "sales",
      name: "Sales Management",
      icon: CreditCard,
      submenu: [
        { name: "POS", path: "/store/pos", icon: CirclePlus },
        { name: "ADD SALES", path: "/store/addsales", icon: CirclePlus },
        { name: "Sales List", path: "/store/saleslist", icon: List },
        { name: "Sales Payment", path: "/store/salespayment", icon: List },
        {
          name: "Sales Return list",
          path: "/store/salesreturnlist",
          icon: List,
        },
      ],
    },
    {
      id: "shipping",
      name: "Shipping",
      icon: Truck,
      submenu: [
        { name: "Ship Orders", path: "/store/ship-orders", icon: List },
        {
          name: "Delivery Partners",
          path: "/store/delivery-partners",
          icon: List,
        },
        { name: "Tracking", path: "/store/tracking", icon: List },
      ],
    },
    {
      id: "settings",
      name: "Settings",
      icon: Settings,
      submenu: [
        { name: "Store Info", path: "/store/settings/info", icon: List },
        { name: "Tax List", path: "/store/settings/tax", icon: List },
        { name: "Payment Types", path: "/store/settings/payment", icon: List },
        { name: "Units List", path: "/store/settings/units", icon: List },
      ],
    },
    {
      id: "account",
      name: "Account",
      icon: Lock,
      submenu: [
        { name: "Profile", path: "/store/profile", icon: List },
        { name: "Notifications", path: "/store/notifications", icon: List },
        { name: "Change Password", path: "/store/change-password", icon: List },
        { name: "Support", path: "/store/support", icon: List },
      ],
    },
  ];

  // ✅ Handle Dropdown Toggle
  const handleDropdownClick = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  // ✅ Handle Main Menu Click
  const handleMainMenuClick = () => {
    setOpenDropdown(null);
  };

  return (
    <motion.aside className="w-64 bg-white shadow-lg flex flex-col border-r border-gray-200">
      <nav className="flex-1 overflow-y-auto py-4">
        {/* ✅ Main Menu */}
        {mainMenu.map((item) => (
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

        {/* ✅ Dropdown Menus */}
        {dropdownMenus.map((menu) => (
          <div key={menu.id} className="mt-2">
            <button
              onClick={() => handleDropdownClick(menu.id)}
              className={`w-full flex items-center justify-between px-6 py-3 text-sm rounded-r-full transition-colors duration-200 ${
                openDropdown === menu.id
                  ? "bg-sky-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center space-x-3">
                <menu.icon className="w-5 h-5" />
                <span>{menu.name}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  openDropdown === menu.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* ✅ Animated Submenu */}
            <AnimatePresence>
              {openDropdown === menu.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-md shadow-inner overflow-hidden"
                >
                  {menu.submenu.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      className={({ isActive }) =>
                        `w-full flex items-center space-x-3 px-10 py-2.5 text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-sky-100 text-sky-600 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`
                      }
                    >
                      {sub.icon && <sub.icon className="w-4 h-4" />}
                      <span>{sub.name}</span>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
    </motion.aside>
  );
}
>>>>>>> adding/dashboard
