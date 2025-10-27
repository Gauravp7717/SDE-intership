import React, { useState } from "react";
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

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [settingsOpen, setSettingsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Tenants", icon: Building2 },
    { name: "Plans", icon: CreditCard },
    { name: "Subscriptions", icon: RefreshCw },
    { name: "Users", icon: Users },
  ];

  const settingsSubmenu = [
    { name: "Store", icon: Store },
    { name: "SMS/WhatsApp API", icon: MessageSquare },
    { name: "Tax List", icon: Percent },
    { name: "Units List", icon: List },
    { name: "Payment Types", icon: CreditCard },
    { name: "Change Password", icon: Lock },
  ];

  return (
    <aside className="w-64  bg-white shadow-lg flex flex-col fixed top-0 left-0">
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveMenu(item.name)}
            className={`w-full flex items-center space-x-3 px-6 py-3 text-sm transition-colors ${
              activeMenu === item.name
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
                  onClick={() => setActiveMenu(item.name)}
                  className={`w-full flex items-center space-x-3 px-10 py-2.5 text-sm transition-colors ${
                    activeMenu === item.name
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
  );
};

export default Sidebar;
