import React from "react";
import { Shield } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-5 py-1 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Right: User Info */}
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-800">Nikhilkhatate</p>
          <p className="text-xs text-gray-500">(Super Admin)</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-sm">
          <Shield className="w-6 h-6 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
