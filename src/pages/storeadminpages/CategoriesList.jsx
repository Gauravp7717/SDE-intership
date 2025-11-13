import React from "react";
import DataTable from "../../components/DataTable";

const categories = [
  {
    categoryName: "Kitchen",
    description: "This is the kitchen Category.",
    status: "Active",
  },
  {
    categoryName: "Electronnics",
    description: "This is the Electronnics Category.",
    status: "Active",
  },
  {
    categoryName: "Bakery",
    description: "This is the bakery category.",
    status: "Active",
  },
  {
    categoryName: "Home Decoration",
    description: "This is the home decoration category.",
    status: "Active",
  },
  {
    categoryName: "Cloths",
    description: "This is the cloth category.",
    status: "Active",
  },
  {
    categoryName: "Grocery",
    description: "This is the grocery category.",
    status: "Active",
  },
  {
    categoryName: "Food 1",
    description: "This is the food category.",
    status: "Active",
  },
];

const columns = [
  { header: "Category Name", key: "categoryName" },
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

const CategoriesList = () => {
  const handleEdit = (row) => alert(`Edit ${row.categoryName}`);
  const handleDelete = (row) => alert(`Delete ${row.categoryName}`);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Categories List</h2>
      <DataTable
        columns={columns}
        data={categories}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Category"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CategoriesList;
