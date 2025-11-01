import React, { useState, useEffect } from "react";
import { Users, Building2, CreditCard, RefreshCw } from "lucide-react";

// ✅ Custom Hook for Animated Count
function useCountUp(endValue, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const totalFrames = Math.round(duration / 16);
    const increment = endValue / totalFrames;

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(counter);
        setValue(endValue);
      } else {
        setValue(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [endValue, duration]);

  return value;
}

export default function DashboardScreen() {
  const [activeFilter, setActiveFilter] = useState("Today");
  const filters = ["Today", "Weekly", "Monthly", "Yearly", "All"];

  const stats = [
    {
      title: "TENANTS",
      value: 1,
      icon: Building2,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "PLANS",
      value: 4,
      icon: CreditCard,
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "SUBSCRIPTIONS",
      value: 2,
      icon: RefreshCw,
      gradient: "from-green-400 to-teal-500",
    },
    {
      title: "USERS",
      value: 4,
      icon: Users,
      gradient: "from-blue-600 to-indigo-600",
    },
  ];

  return (
    <div className="p-6 bg-white  ">
      <h2 className="text-lg font-semibold mb-6 text-gray-800 text-center">
        Dashboard Overview
      </h2>

      {/* Filters */}
      <div className="flex justify-center mb-6 flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-300 ${
              activeFilter === filter
                ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                : "text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* ✅ Animated Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, i) => {
          const Icon = item.icon;
          const animatedValue = useCountUp(item.value, 1000);

          return (
            <div
              key={i}
              className="p-5 rounded-xl flex justify-between items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 animate-fadeIn cursor-pointer"
              style={{
                animationDelay: `${i * 150}ms`,
                animationFillMode: "forwards",
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(200,200,200,0.4)",
              }}
            >
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  {animatedValue}
                </p>
                <p className="text-xs font-medium text-gray-600 tracking-wide">
                  {item.title}
                </p>
              </div>

              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ✅ Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.7s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
