import React from "react";
import DataTable from "../../components/DataTable"; // adjust import as needed

const countries = [
  { countryName: "Zimbabwe", status: "Active" },
  { countryName: "Zambia", status: "Active" },
  { countryName: "Yemen", status: "Active" },
  { countryName: "Vietnam", status: "Active" },
  { countryName: "Venezuela", status: "Active" },
  { countryName: "Vatican City", status: "Active" },
  { countryName: "Vanuatu", status: "Active" },
  { countryName: "Uzbekistan", status: "Active" },
  { countryName: "Uruguay", status: "Active" },
  { countryName: "United States", status: "Active" },
  // Add more as needed for your complete list
];

const columns = [
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

const CountriesList = () => {
  const handleEdit = (row) => alert(`Edit country: ${row.countryName}`);
  const handleDelete = (row) => alert(`Delete country: ${row.countryName}`);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Countries List</h2>
      <DataTable
        columns={columns}
        data={countries}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Country"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CountriesList;
