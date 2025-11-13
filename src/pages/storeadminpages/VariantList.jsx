import React from "react";
import DataTable from "../../components/DataTable";

const variants = [
  {
    variantName: "cxzc",
    description: "czxc",
    status: "Active",
  },
  {
    variantName: "aaaa",
    description: "dsadsad",
    status: "Active",
  },
  {
    variantName: "xxx",
    description: "dasda",
    status: "Active",
  },
  {
    variantName: "Copper",
    description: "",
    status: "Active",
  },
  {
    variantName: "Colour",
    description: "",
    status: "Active",
  },
];

const columns = [
  { header: "Variant Name", key: "variantName" },
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

const VariantList = () => {
  const handleEdit = (row) => alert(`Edit ${row.variantName}`);
  const handleDelete = (row) => alert(`Delete ${row.variantName}`);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Variant List</h2>
      <DataTable
        columns={columns}
        data={variants}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Variant"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default VariantList;
