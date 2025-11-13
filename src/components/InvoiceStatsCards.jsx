import React from "react";
import { ShoppingBag, DollarSign, Info, Minus } from "lucide-react";

const StatCard = ({ icon: Icon, value, label, gradientFrom, gradientTo }) => {
  return (
    <div className="flex items-center gap-4 bg-white rounded-lg p-6 shadow-sm">
      <div
        className={`w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
      >
        <Icon className="w-12 h-12 text-white" strokeWidth={2} />
      </div>
      <div className="flex-1">
        <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
        <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
          {label}
        </div>
      </div>
    </div>
  );
};

const InvoiceStatsCards = ({ stats }) => {
  const defaultStats = [
    {
      icon: ShoppingBag,
      value: "16",
      label: "Total Invoices",
      gradientFrom: "from-cyan-600",
      gradientTo: "to-blue-600",
    },
    {
      icon: DollarSign,
      value: "₹ 4.17M",
      label: "Total Invoices Amount",
      gradientFrom: "from-cyan-600",
      gradientTo: "to-blue-600",
    },
    {
      icon: Info,
      value: "₹ 3.48M",
      label: "Total Received Amount",
      gradientFrom: "from-cyan-600",
      gradientTo: "to-blue-600",
    },
    {
      icon: Minus,
      value: "₹ 693.66K",
      label: "Total Sales Due",
      gradientFrom: "from-cyan-600",
      gradientTo: "to-blue-600",
    },
  ];

  const displayStats = stats || defaultStats;

  return (
    <div className="w-full  p-6">
      <div className="grid grid-cols-2 gap-6 w-full">
        {displayStats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            gradientFrom={stat.gradientFrom}
            gradientTo={stat.gradientTo}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage demonstration
const App = () => {
  // You can customize the stats by passing your own data
  const customStats = [
    {
      icon: ShoppingBag,
      value: "16",
      label: "Total Invoices",
      gradientFrom: "from-cyan-600",
      gradientTo: "to-blue-600",
    },
    {
      icon: DollarSign,
      value: "₹ 4.17M",
      label: "Total Invoices Amount",
      gradientFrom: "from-cyan-600",
      gradientTo: "to-blue-600",
    },
    {
      icon: Info,
      value: "₹ 3.48M",
      label: "Total Received Amount",
      gradientFrom: "from-cyan-600",
      gradientTo: "to-blue-600",
    },
    {
      icon: Minus,
      value: "₹ 693.66K",
      label: "Total Sales Due",
      gradientFrom: "from-cyan-600",
      gradientTo: "to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <InvoiceStatsCards stats={customStats} />
    </div>
  );
};

export default InvoiceStatsCards;
