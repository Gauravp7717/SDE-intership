import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import Filter from "../../components/Filter"; // adjust path if needed

const items = [
  {
    code: "IT020323",
    name: "apple",
    hsn: "",
    sku: "",
    brand: "Samsung",
    category: "Electronics",
    itemType: "ITEM",
    unit: "PCS",
    stock: "121.00",
    alertQty: "0",
    salesPrice: "1,100.000",
    tax: "VAT (15.000%)",
    status: "Active",
    warehouse: "System Warehouse",
  },
  {
    code: "IT020322",
    name: "bbbb",
    hsn: "",
    sku: "sd",
    brand: "",
    category: "Electronics",
    itemType: "SERVICE",
    unit: "",
    stock: "0.00",
    alertQty: "3,000.000",
    salesPrice: "",
    tax: "VAT (15.000%)",
    status: "Active",
    warehouse: "Al Amerat Store",
  },
  {
    code: "IT020321",
    name: "yyyy",
    hsn: "",
    sku: "",
    brand: "Samsung",
    category: "Electronics",
    itemType: "ITEM",
    unit: "PCS",
    stock: "0.00",
    alertQty: "0",
    salesPrice: "110.000",
    tax: "VAT (15.000%)",
    status: "Active",
    warehouse: "XZZCZczx",
  },
  {
    code: "IT020318",
    name: "wwww",
    hsn: "",
    sku: "25",
    brand: "Samsung",
    category: "Electronics",
    itemType: "ITEM",
    unit: "UNIT",
    stock: "0.00",
    alertQty: "0",
    salesPrice: "3,300.000",
    tax: "VAT (15.000%)",
    status: "Active",
    warehouse: "System Warehouse",
  },
  {
    code: "Shirt 1",
    name: "Shirt 1",
    hsn: "",
    sku: "",
    brand: "",
    category: "Cloths",
    itemType: "ITEM",
    unit: "PCS",
    stock: "100.00",
    alertQty: "0",
    salesPrice: "494.845",
    tax: "VAT (15.000%)",
    status: "Active",
    warehouse: "System Warehouse",
  },
  {
    code: "Shirt 1-2",
    name: "Shirt 1",
    hsn: "",
    sku: "",
    brand: "",
    category: "Cloths",
    itemType: "ITEM",
    unit: "PCS",
    stock: "40.00",
    alertQty: "0",
    salesPrice: "494.845",
    tax: "VAT (15.000%)",
    status: "Active",
    warehouse: "Al Amerat Store",
  },
  {
    code: "Khadi Shirt",
    name: "Khadi Shirt",
    hsn: "",
    sku: "",
    brand: "",
    category: "Cloths",
    itemType: "ITEM",
    unit: "PCS",
    stock: "560.00",
    alertQty: "0",
    salesPrice: "500.000",
    tax: "VAT (15.000%)",
    status: "Active",
    warehouse: "System Warehouse",
  },
  {
    code: "Plain Shirt",
    name: "Plain Shirt",
    hsn: "",
    sku: "",
    brand: "",
    category: "Cloths",
    itemType: "ITEM",
    unit: "PCS",
    stock: "55.00",
    alertQty: "0",
    salesPrice: "500.000",
    tax: "VAT (15.000%)",
    status: "Active",
    warehouse: "Al Amerat Store",
  },
  {
    code: "IT020313",
    name: "S24",
    hsn: "",
    sku: "",
    brand: "Samsung",
    category: "Electronics",
    itemType: "ITEM",
    unit: "PCS",
    stock: "20.00",
    alertQty: "0",
    salesPrice: "12,000.000",
    tax: "VAT (15.000%)",
    status: "Active",
    warehouse: "System Warehouse",
  },
  {
    code: "IT020312",
    name: "Vivo",
    hsn: "",
    sku: "",
    brand: "Samsung",
    category: "Electronics",
    itemType: "ITEM",
    unit: "PCS",
    stock: "19.00",
    alertQty: "0",
    salesPrice: "11,998.800",
    tax: "VAT (15.000%)",
    status: "Active",
    warehouse: "Al Amerat Store",
  },
];

const columns = [
  {
    header: "Image",
    key: "image",
    render: () => <span className="w-5 h-5 bg-gray-200 inline-block rounded" />,
  },
  { header: "Item Code", key: "code" },
  { header: "Item Name", key: "name" },
  { header: "Brand", key: "brand" },
  {
    header: "Category / Item Type",
    key: "category",
    render: (value, row) => `${value} [${row.itemType}]`,
  },
  { header: "Unit", key: "unit" },
  { header: "Stock", key: "stock" },
  { header: "Alert Quantity", key: "alertQty" },
  { header: "Sales Price", key: "salesPrice" },
  { header: "Tax", key: "tax" },
  {
    header: "Status",
    key: "status",
    render: (value) => (
      <span
        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
          value === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {value}
      </span>
    ),
  },
];

const warehouseOptions = [
  "-All Warehouses-",
  "System Warehouse",
  "Al Amerat Store",
  "XZZCZczx",
];

const itemTypeOptions = ["All", "Items", "Services"];

const ItemList = () => {
  const [filters, setFilters] = useState({
    warehouse: "",
    itemType: "",
  });

  // Filtering logic
  const filteredItems = items.filter(
    (item) =>
      (!filters.warehouse ||
        filters.warehouse === "-All Warehouses-" ||
        item.warehouse === filters.warehouse) &&
      (!filters.itemType ||
        filters.itemType === "All" ||
        item.itemType.toLowerCase().includes(filters.itemType.toLowerCase()))
  );

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Items List</h2>
      <div className="flex gap-4 mb-4">
        {/* Warehouse dropdown controlled by Filter-form style */}
        <select
          value={filters.warehouse}
          onChange={(e) =>
            setFilters((f) => ({ ...f, warehouse: e.target.value }))
          }
          className="border border-gray-300 rounded px-3 py-2 text-sm"
        >
          {warehouseOptions.map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>
        {/* Item Type dropdown */}
        <select
          value={filters.itemType}
          onChange={(e) =>
            setFilters((f) => ({ ...f, itemType: e.target.value }))
          }
          className="border border-gray-300 rounded px-3 py-2 text-sm"
        >
          {itemTypeOptions.map((it) => (
            <option key={it} value={it}>
              {it}
            </option>
          ))}
        </select>
      </div>
      <DataTable
        columns={columns}
        data={filteredItems}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Item"
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
};

export default ItemList;
