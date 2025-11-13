import React from "react";
import DataTable from "../../components/DataTable";

const brands = [
  {
    brandName: "Apple",
    description: "This is no 1 Brand in India.",
    status: "Active",
  },
  {
    brandName: "Usha",
    description: "Usha is best electronic brand.",
    status: "Active",
  },
  {
    brandName: "Crompton",
    description: "Crompton is electronic brand.",
    status: "Active",
  },
  {
    brandName: "Bajaj",
    description: "Bajaj is A1 quality brand.",
    status: "Active",
  },
  {
    brandName: "Philips",
    description: "Philips is trusted brand.",
    status: "Active",
  },
];

const columns = [
  { header: "Brand Name", key: "brandName" },
  { header: "Description", key: "description" },
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

const BrandList = () => {
  const handleEdit = (row) => alert(`Edit ${row.brandName}`);
  const handleDelete = (row) => alert(`Delete ${row.brandName}`);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Brand List</h2>
      <DataTable
        columns={columns}
        data={brands}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Brand"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default BrandList;
