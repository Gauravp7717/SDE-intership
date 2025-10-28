import React from "react";
import { useLocation } from "react-router-dom";
import { Shield } from "lucide-react";
import Header from "../components/Header";

export default function Home({ CurrentPage }) {
  const location = useLocation();

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Top Navbar */}

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto px-6 py-2">
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
          <h1 className="text-2xl font-bold text-gray-900 ">
            {location.pathname === "/"
              ? "Dashboard"
              : location.pathname
                  .replace("/", "")
                  .replace(/^\w/, (c) => c.toUpperCase())}
          </h1>

          {/* Dynamic Content (from Dashboard) */}
          <div>{CurrentPage}</div>
        </div>
      </main>
    </div>
  );
}
