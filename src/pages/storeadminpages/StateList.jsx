import React from "react";
import DataTable from "../../components/DataTable"; // Adjust import as needed

const states = [
  { stateName: "Maharashtra", countryName: "Algeria", status: "Active" },
  { stateName: "Karnataka", countryName: "India", status: "Active" },
  { stateName: "Delhi", countryName: "India", status: "Active" },
  { stateName: "New York", countryName: "USA", status: "Active" },
  { stateName: "West Bengal", countryName: "India", status: "Active" },
  { stateName: "Uttarakhand", countryName: "India", status: "Active" },
  { stateName: "Uttar Pradesh", countryName: "India", status: "Active" },
  { stateName: "Tripura", countryName: "India", status: "Active" },
  { stateName: "Telangana", countryName: "India", status: "Active" },
  { stateName: "Tamil Nadu", countryName: "India", status: "Active" },
];

const columns = [
  { header: "State Name", key: "stateName" },
  { header: "Country Name", key: "countryName" },
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

const StateList = () => {
  const handleEdit = (row) => alert(`Edit state: ${row.stateName}`);
  const handleDelete = (row) => alert(`Delete state: ${row.stateName}`);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">States List</h2>
      <DataTable
        columns={columns}
        data={states}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add State"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default StateList;
