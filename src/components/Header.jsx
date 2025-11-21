import React, { useState, useRef, useEffect } from "react";
import { LogOut, ChevronDown, CirclePlus } from "lucide-react";
import Logo from "./Logo";
import Avatar from "../ui/Avatar";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handelnav = (path) => {
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 px-5 py-2 flex items-center justify-between">
      {/* LEFT - Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* RIGHT - POS + Profile */}
      <div className="flex items-center space-x-5" ref={menuRef}>
        {/* POS Button */}
        <button
          onClick={() => handelnav("/store/pos")}
          className="flex items-center gap-2  px-3 py-1.5 rounded-lg "
        >
          <CirclePlus />
          POS
        </button>

        {/* Profile & Dropdown */}
        <div
          className="relative flex items-center space-x-2 cursor-pointer select-none"
          onClick={handleToggleMenu}
        >
          <div className="text-right leading-tight">
            <p className="text-sm font-semibold text-gray-800">
              {user?.name || "User Name"}
            </p>
            <p className="text-xs text-gray-500">(Super Admin)</p>
          </div>

          <Avatar
            name={user?.name || "User Name"}
            src={user?.avatarUrl}
            size={40}
          />

          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />

          {isMenuOpen && (
            <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-xl shadow-lg w-52 py-2 z-50">
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
      </div>
    </header>
  );
};

export default Header;
