import React from "react";
import DataTable from "../../components/DataTable"; // adjust import as needed

const templates = [
  {
    templateName: "GREETING TO CUSTOMER ON SALES",
    content:
      "Hi {{customer_name}}, Your sales Id is {{sales_id}}, Sales Date {{sales_date}}, Total amount {{sales_amount}}, You have paid {{paid_amt}}, and due amount is {{due_amt}} Thank you Visit Again",
    status: "Active",
  },
  {
    templateName: "GREETING TO CUSTOMER ON SALES RETURN",
    content:
      "Hi {{customer_name}}, Your sales return Id is {{return_id}}, Return Date {{return_date}}, Total amount {{return_amount}}, We paid {{paid_amt}}, and due amount is {{due_amt}} Thank you Visit Again",
    status: "Active",
  },
];

const columns = [
  { header: "Template Name", key: "templateName" },
  { header: "Content", key: "content" },
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

const MessagingTemplate = () => {
  const handleEdit = (row) => alert(`Edit template: ${row.templateName}`);
  const handleDelete = (row) => alert(`Delete template: ${row.templateName}`);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        Message Templates List
      </h2>
      <DataTable
        columns={columns}
        data={templates}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Template"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MessagingTemplate;
