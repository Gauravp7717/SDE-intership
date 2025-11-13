import React, { useState } from "react";
import { Calendar } from "lucide-react";

const FilterForm = ({
  onFilterChange,
  fields = ["warehouse", "customer", "user", "fromDate", "toDate"],
  className = "",
}) => {
  const [filters, setFilters] = useState({
    warehouse: "",
    customer: "",
    user: "All",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  return (
    <form className={`bg-white rounded-lg ${className}`}>
      <div
        className={`grid gap-4 ${
          fields.length <= 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {/* Warehouse Dropdown */}
        {fields.includes("warehouse") && (
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Warehouse <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={filters.warehouse}
                onChange={(e) => handleChange("warehouse", e.target.value)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
              >
                <option value="">-All Warehouses-</option>
                <option value="warehouse1">Warehouse 1</option>
                <option value="warehouse2">Warehouse 2</option>
                <option value="warehouse3">Warehouse 3</option>
              </select>
            </div>
          </div>
        )}

        {/* Customers Dropdown */}
        {fields.includes("customer") && (
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Customers
            </label>
            <div className="relative">
              <select
                value={filters.customer}
                onChange={(e) => handleChange("customer", e.target.value)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-400"
              >
                <option value="">Search Name/Mobile</option>
                <option value="customer1">Customer 1</option>
                <option value="customer2">Customer 2</option>
                <option value="customer3">Customer 3</option>
              </select>
            </div>
          </div>
        )}

        {/* Users Dropdown */}
        {fields.includes("user") && (
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Users
            </label>
            <div className="relative">
              <select
                value={filters.user}
                onChange={(e) => handleChange("user", e.target.value)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
              >
                <option value="All">All</option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
              </select>
            </div>
          </div>
        )}

        {/* From Date Picker */}
        {fields.includes("fromDate") && (
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              From Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={filters.fromDate}
                onChange={(e) => handleChange("fromDate", e.target.value)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}

        {/* To Date Picker */}
        {fields.includes("toDate") && (
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              To Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={filters.toDate}
                onChange={(e) => handleChange("toDate", e.target.value)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

const Filter = ({ className = "", fields }) => {
  const handleFilterChange = (filters) => {
    console.log("Filters changed:", filters);
  };

  return (
    <div className={`min-w-0 ${className}`}>
      <FilterForm
        onFilterChange={handleFilterChange}
        className="w-full"
        fields={fields}
      />
    </div>
  );
};

export default Filter;
