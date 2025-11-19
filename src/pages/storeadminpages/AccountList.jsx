import React from "react";
import { useNavigate } from "react-router-dom";
const AccountList = () => {
  const handleEdit = (row) => alert(`Edit ${row.code}`);
  const handleDelete = (row) => alert(`Delete ${row.code}`);
  const navigate = useNavigate();
  const handleadd = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Account List</h2>
      <DataTable
        columns={columns}
        data={accounts}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Account"
        onAdd={() => handleadd("/store/addaccount")}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AccountList;
