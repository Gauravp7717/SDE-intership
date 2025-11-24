import React, { useState, useRef, useEffect } from "react";
import { LogOut, ChevronDown, CirclePlus } from "lucide-react";
import Logo from "./Logo";
import Avatar from "../ui/Avatar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => setIsMenuOpen((v) => !v);

  const handleLogout = () => {
    setIsMenuOpen(false);
    logout();
  };

  // POS Navigation
  const handleNav = (path) => {
    navigate(path);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Avatar
  const fallbackAvatar =
    user?.avatarUrl ||
    "https://ui-avatars.com/api/?name=" +
      (user?.name || "User") +
      "&background=0D8ABC&color=fff";

  // Role
  const displayRole =
    user?.role === "superadmin"
      ? "Super Admin"
      : user?.role === "storeadmin"
      ? "Store Admin"
      : "User";

  // Name
  const displayName =
    user?.username ||
    user?.name ||
    (user?.role === "superadmin" ? "Super Admin" : "Store Admin");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 px-5 py-2 flex items-center justify-between">
      {/* LEFT - Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center space-x-5" ref={menuRef}>
        {/* POS Button */}
        <button
          onClick={() => handleNav("/store/pos")}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
        >
          <CirclePlus />
          POS
        </button>

        {/* Profile Section */}
        <div
          className="relative flex items-center space-x-2 cursor-pointer select-none"
          onClick={handleToggleMenu}
        >
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">{displayName}</p>
            <p className="text-xs text-gray-500">({displayRole})</p>
          </div>

          <Avatar name={displayName} src={fallbackAvatar} size={40} />

          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* DROPDOWN MENU */}
        {isMenuOpen && (
          <div className="absolute right-0 top-14 bg-white border border-gray-200 rounded-xl shadow-lg w-52 py-2 z-50">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
            >
              <LogOut className="w-4 h-4 text-gray-600" /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
