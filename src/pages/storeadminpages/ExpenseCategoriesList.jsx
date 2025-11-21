import React from "react";
import DataTable from "../../components/DataTable"; // adjust import as needed
import { useNavigate } from "react-router-dom";

const categories = [
  {
    categoryName: "Logistics",
    description: "",
    status: "Active",
  },
  {
    categoryName: "Hardware",
    description: "",
    status: "Active",
  },
  {
    categoryName: "Software",
    description: "",
    status: "Active",
  },
  {
    categoryName: "Marketing",
    description: "",
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

const ExpenseCategoriesList = () => {
  const handleEdit = (row) => alert(`Edit category ${row.categoryName}`);
  const handleDelete = (row) => alert(`Delete category ${row.categoryName}`);
  const navigate = useNavigate();
  const handeladd = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        Expense Categories List
      </h2>
      <DataTable
        columns={columns}
        data={categories}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Category"
        onAdd={() => {
          handeladd("/store/addexpencecategory");
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ExpenseCategoriesList;
