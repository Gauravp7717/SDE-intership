import { Shield } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className="p-3  border-gray-200 flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
        <Shield className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
        Transactly
      </span>
    </div>
  );
};

export default Logo;
