import React, { useState, useEffect } from "react";
import DataTable from "../../components/DataTable";
import {
  ShoppingCart,
  DollarSign,
  FileText,
  Users,
  Truck,
  CreditCard,
  ClipboardList,
  TrendingUp,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// ✅ Smooth count animation hook
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

// --- STOCK ALERT DATA ---
const stockAlertData = [
  {
    code: "IT020321",
    name: "yyyy",
    category: "Electronics",
    brand: "Samsung",
    stock: "0.00",
  },
  {
    code: "IT020318",
    name: "wwww",
    category: "Electronics",
    brand: "Samsung",
    stock: "0.00",
  },
  {
    code: "IT020322",
    name: "Gulab Jamun",
    category: "Bakery",
    brand: "-",
    stock: "0.00",
  },
  {
    code: "IT020323",
    name: "Boat headphones",
    category: "Electronics",
    brand: "-",
    stock: "0.00",
  },
  {
    code: "IT020324",
    name: "Iphone 17",
    category: "Electronics",
    brand: "Apple",
    stock: "0.00",
  },
  {
    code: "IT020325",
    name: "Mobile",
    category: "Electronics",
    brand: "Apple",
    stock: "0.00",
  },
  {
    code: "IT020326",
    name: "Sweets",
    category: "Groceries",
    brand: "-",
    stock: "0.00",
  },
  {
    code: "IT020327",
    name: "LG TV",
    category: "Electronics",
    brand: "Bajaj",
    stock: "0.00",
  },
  {
    code: "IT020328",
    name: "Mobile",
    category: "Electronics",
    brand: "Samsung",
    stock: "0.00",
  },
];

const stockAlertColumns = [
  { header: "#", key: "code" },
  { header: "Item Name", key: "name" },
  { header: "Category Name", key: "category" },
  { header: "Brand Name", key: "brand" },
  {
    header: "Stock",
    key: "stock",
    render: (value) => <span className="text-red-700 font-bold">{value}</span>,
  },
];

export default function StoreAdminDashboard() {
  const [activeFilter, setActiveFilter] = useState("Today");
  const filters = ["Today", "Weekly", "Monthly", "Yearly", "All"];

  const stats = [
    {
      title: "PURCHASE DUE",
      value: 5,
      icon: CreditCard,
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "SALES DUE",
      value: 3,
      icon: ClipboardList,
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      title: "SALES",
      value: 120,
      icon: TrendingUp,
      gradient: "from-green-400 to-teal-500",
    },
    {
      title: "EXPENSE",
      value: 42,
      icon: DollarSign,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "CUSTOMERS",
      value: 230,
      icon: Users,
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      title: "SUPPLIERS",
      value: 58,
      icon: Truck,
      gradient: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "PURCHASES",
      value: 80,
      icon: ShoppingCart,
      gradient: "from-cyan-500 to-sky-500",
    },
    {
      title: "INVOICES",
      value: 70,
      icon: FileText,
      gradient: "from-slate-500 to-gray-600",
    },
  ];

  const data = [
    { month: "May,2025", Purchase: 200000, Sales: 150000, Expense: 100000 },
    { month: "Jun,2025", Purchase: 300000, Sales: 200000, Expense: 120000 },
    { month: "Jul,2025", Purchase: 250000, Sales: 270000, Expense: 180000 },
    { month: "Aug,2025", Purchase: 400000, Sales: 350000, Expense: 220000 },
    { month: "Sep,2025", Purchase: 380000, Sales: 420000, Expense: 260000 },
    { month: "Oct,2025", Purchase: 410000, Sales: 460000, Expense: 300000 },
    { month: "Nov,2025", Purchase: 300000, Sales: 390000, Expense: 250000 },
  ];

  const recentItems = [
    { id: 1, name: "Wireless Mouse", price: "₹1,200" },
    { id: 2, name: "Office Chair", price: "₹5,500" },
    { id: 3, name: "Bluetooth Speaker", price: "₹2,800" },
    { id: 4, name: "Notebook Set", price: "₹450" },
    { id: 5, name: "Laptop Stand", price: "₹1,850" },
    { id: 6, name: "Keyboard", price: "₹1,400" },
    { id: 7, name: "Desk Lamp", price: "₹2,200" },
  ];

  const trendingItems = [
    { name: "Boat Headphone", value: 400 },
    { name: "Vivo V15", value: 300 },
    { name: "Mobile", value: 300 },
    { name: "BEEF BURGER-STETSON", value: 200 },
    { name: "Philips Iron", value: 250 },
    { name: "BEEF MARROW BONES", value: 150 },
    { name: "BEEF CUBES", value: 180 },
    { name: "BEEF FILLET-FOOD FOR THOUGHT", value: 120 },
  ];

  const colors = [
    "#6366F1",
    "#EC4899",
    "#10B981",
    "#EAB308",
    "#F97316",
    "#374151",
    "#60A5FA",
    "#FACC15",
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-lg font-semibold mb-6 text-gray-800 text-center">
        Store Admin Dashboard
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

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
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

      {/* Chart + Recently Added Items */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mb-10">
        {/* Bar Chart */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <h3 className="text-md font-semibold text-gray-800 mb-4">
            Purchase, Sales & Expense Chart
          </h3>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => value.toLocaleString()} />
                <Tooltip formatter={(value) => value.toLocaleString()} />
                <Legend />
                <Bar dataKey="Purchase" fill="#ff4d4f" />
                <Bar dataKey="Sales" fill="#0048ff" />
                <Bar dataKey="Expense" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Recently Added Items */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col">
          <h3 className="text-md font-semibold text-gray-800 mb-4">
            Recently Added Items
          </h3>
          <div className="overflow-y-auto flex-grow">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="py-2 px-3 border-b w-16 text-center">
                    Sr. No
                  </th>
                  <th className="py-2 px-3 border-b">Item Name</th>
                  <th className="py-2 px-3 border-b text-right">Sales Price</th>
                </tr>
              </thead>
              <tbody>
                {recentItems.map((item, i) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-2 px-3 border-b text-center text-gray-700">
                      {i + 1}
                    </td>
                    <td className="py-2 px-3 border-b text-gray-800 font-medium">
                      {item.name}
                    </td>
                    <td className="py-2 px-3 border-b text-right text-gray-700">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 📦 Stock Alert Table (Reusable DataTable) */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <h3 className="text-md font-semibold text-gray-800 mb-4 uppercase tracking-wide">
          STOCK ALERT
        </h3>
        <DataTable
          columns={stockAlertColumns}
          data={stockAlertData}
          entriesPerPage={10}
          showSearch={true}
          showPagination={true}
          addButtonText="Add Item"
          onAdd={() => {}}
          // Optionally include onEdit and onDelete
          // onEdit={row => alert("Edit " + row.code)}
          // onDelete={row => alert("Delete " + row.code)}
        />
      </div>

      {/* 🥧 Top 10 Trending Items & Recent Sales Invoices */}
      <div className="grid grid-cols-1 lg:grid-cols-[2.25fr_1fr] gap-6 mt-8 items-stretch">
        {/* Pie Chart Section (wider) */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col">
          <h3 className="text-md font-semibold text-gray-800 mb-4 uppercase tracking-wide">
            TOP 10 TRENDING ITEMS
          </h3>
          <div className="w-full flex-1 min-h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trendingItems}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={150}
                  paddingAngle={1}
                >
                  {trendingItems.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  layout="horizontal"
                  verticalAlign="top"
                  align="center"
                  wrapperStyle={{ fontSize: "12px", marginTop: "10px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* 📋 Recent Sales Invoices (taller, scrollable) */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col">
          <h3 className="text-md font-semibold text-gray-800 mb-4 uppercase tracking-wide">
            RECENT SALES INVOICES
          </h3>
          <div className="overflow-y-auto flex-1">
            <table className="min-w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#F9FAFB] text-gray-700">
                <tr>
                  <th className="py-2 px-3 border font-semibold text-center w-16">
                    Sl.No
                  </th>
                  <th className="py-2 px-3 border font-semibold">Date</th>
                  <th className="py-2 px-3 border font-semibold">Invoice ID</th>
                  <th className="py-2 px-3 border font-semibold">Customer</th>
                  <th className="py-2 px-3 border font-semibold text-right">
                    Total
                  </th>
                  <th className="py-2 px-3 border font-semibold text-center">
                    Status
                  </th>
                  <th className="py-2 px-3 border font-semibold">Created By</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: "25-10-2025",
                    id: "SL71",
                    customer: "Walk-in customer",
                    total: "₹1,380.000",
                    status: "Paid",
                    createdBy: "Lokesh",
                  },
                  {
                    date: "24-10-2025",
                    id: "SL70",
                    customer: "Walk-in customer",
                    total: "₹690.000",
                    status: "Paid",
                    createdBy: "Lokesh",
                  },
                  {
                    date: "17-10-2025",
                    id: "SL68",
                    customer: "NEOS / ZORBAS THE GREEK",
                    total: "₹11,498.850",
                    status: "Paid",
                    createdBy: "John",
                  },
                  {
                    date: "15-10-2025",
                    id: "SL66",
                    customer: "NEOS / ZORBAS THE GREEK",
                    total: "₹138,000.000",
                    status: "Paid",
                    createdBy: "John",
                  },
                  {
                    date: "30-09-2025",
                    id: "SL56",
                    customer: "Walk-in customer",
                    total: "₹110,000.000",
                    status: "Paid",
                    createdBy: "Shubham",
                  },
                  // add more rows as needed; this tbody scrolls vertically
                ].map((invoice, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="py-2 px-3 border text-center text-gray-700">
                      {i + 1}
                    </td>
                    <td className="py-2 px-3 border text-gray-700">
                      {invoice.date}
                    </td>
                    <td className="py-2 px-3 border text-gray-700">
                      {invoice.id}
                    </td>
                    <td className="py-2 px-3 border text-gray-800 font-medium">
                      {invoice.customer}
                    </td>
                    <td className="py-2 px-3 border text-right text-gray-700">
                      {invoice.total}
                    </td>
                    <td className="py-2 px-3 border text-center text-green-600 font-semibold">
                      {invoice.status}
                    </td>
                    <td className="py-2 px-3 border text-gray-700">
                      {invoice.createdBy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
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
