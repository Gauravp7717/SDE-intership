import React, { useState, useRef, useEffect } from "react";
import { LogOut, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import Avatar from "../ui/Avatar";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { logout, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => setIsMenuOpen((v) => !v);

  const handleLogout = () => {
    setIsMenuOpen(false);
    logout();
  };

  // 🔒 Close dropdown on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // 🟦 Dummy fallback image
  const fallbackAvatar =
    user?.avatarUrl ||
    "https://ui-avatars.com/api/?name=" +
      (user?.name || "User") +
      "&background=0D8ABC&color=fff";

  // 🟦 Display role (Super Admin / Store Admin)
  const displayRole =
    user?.role === "superadmin"
      ? "Super Admin"
      : user?.role === "storeadmin"
      ? "Store Admin"
      : "User";

  // 🟦 Display name (dummy for now)
  const displayName =
    user?.username || user?.name || (user?.role === "superadmin"
      ? "Super Admin"
      : "Store Admin");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 px-5 py-2 flex items-center justify-between relative">
      <div className="flex items-center">
        <Logo />
      </div>

      <div className="flex items-center space-x-3 relative" ref={menuRef}>
        <div
          className="flex items-center space-x-2 cursor-pointer select-none"
          onClick={handleToggleMenu}
        >
          {/* User name + role */}
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">
              {displayName}
            </p>
            <p className="text-xs text-gray-500">({displayRole})</p>
          </div>

          {/* Profile Image */}
          <Avatar name={displayName} src={fallbackAvatar} size={40} />

          {/* Dropdown Icon */}
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 top-14 bg-white border border-gray-200 rounded-xl shadow-lg w-52 py-2 z-50">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
            >
              <LogOut className="w-4 h-4 text-gray-600" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
