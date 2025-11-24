import React, { useState } from 'react';
import { Save, X } from 'lucide-react';

const AddRole = () => {
  const [roleName, setRoleName] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  
  const [permissions, setPermissions] = useState({
    users: { selectAll: false, permissions: { add: false, edit: false, delete: false, view: false } },
    roles: { selectAll: false, permissions: { add: false, edit: false, delete: false, view: false } },
    tax: { selectAll: false, permissions: { add: false, edit: false, delete: false, view: false } },
    units: { selectAll: false, permissions: { add: false, edit: false, delete: false, view: false } },
    paymentTypes: { selectAll: false, permissions: { add: false, edit: false, delete: false, view: false } },
    warehouse: { selectAll: false, permissions: { add: false, edit: false, delete: false, view: false } },
    store: { selectAll: false, permissions: { edit: false } },
    dashboard: { 
      selectAll: false, 
      permissions: { 
        viewDashboardData: false,
        informationBox1: false,
        informationBox2: false,
        purchaseAndSalesChart: false,
        recentlyAddedItemsList: false,
        stockAlertList: false,
        trendingItemsChart: false,
        recentSalesInvoiceList: false
      } 
    },
    accounts: { 
      selectAll: false, 
      permissions: { 
        add: false,
        edit: false,
        delete: false,
        view: false,
        addMoneyDeposit: false,
        editMoneyDeposit: false,
        deleteMoneyDeposit: false,
        viewMoneyDeposit: false,
        addMoneyTransfer: false,
        editMoneyTransfer: false,
        deleteMoneyTransfer: false,
        viewMoneyTransfer: false,
        cashTransactions: false
      } 
    },
    expense: { 
      selectAll: false, 
      permissions: { 
        add: false,
        edit: false,
        delete: false,
        view: false,
        categoryAdd: false,
        categoryEdit: false,
        categoryDelete: false,
        categoryView: false,
        showAllUsersExpenses: false
      } 
    },
    items: { 
      selectAll: false, 
      permissions: { 
        add: false,
        edit: false,
        delete: false,
        view: false,
        categoryAdd: false,
        categoryEdit: false,
        categoryDelete: false,
        categoryView: false,
        printLabels: false
      } 
    },
    suppliers: { 
      selectAll: false, 
      permissions: { 
        add: false,
        edit: false,
        delete: false,
        view: false,
        addPayment: false,
        viewPayment: false,
        deletePayment: false,
        addPurchaseReturn: false,
        deletePurchaseReturn: false
      } 
    },
    customers: { 
      selectAll: false, 
      permissions: { 
        add: false,
        edit: false,
        delete: false,
        view: false,
        addPayment: false,
        viewPayment: false,
        deletePayment: false,
        addSalesReturn: false,
        deleteSalesReturn: false
      } 
    },
    purchase: { 
      selectAll: false, 
      permissions: { 
        add: false,
        edit: false,
        delete: false,
        view: false
      } 
    },
    sales: { 
      selectAll: false, 
      permissions: { 
        add: false,
        edit: false,
        delete: false,
        view: false
      } 
    },
    reports: { 
      selectAll: false, 
      permissions: { 
        profitLossReport: false,
        purchaseReport: false,
        salesReport: false,
        itemsReport: false,
        expenseReport: false,
        incomeReport: false,
        customerReport: false,
        supplierReport: false
      } 
    }
  });

  const modules = [
    { 
      id: 'users', 
      name: 'Users',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' }
      ]
    },
    { 
      id: 'roles', 
      name: 'Roles',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' }
      ]
    },
    { 
      id: 'tax', 
      name: 'Tax',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' }
      ]
    },
    { 
      id: 'units', 
      name: 'Units',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' }
      ]
    },
    { 
      id: 'paymentTypes', 
      name: 'Payment Types',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' }
      ]
    },
    { 
      id: 'warehouse', 
      name: 'Warehouse',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' }
      ]
    },
    { 
      id: 'store', 
      name: 'Store(Own Store)',
      permissionsList: [
        { key: 'edit', label: 'Edit' }
      ]
    },
    { 
      id: 'dashboard', 
      name: 'Dashboard',
      permissionsList: [
        { key: 'viewDashboardData', label: 'View Dashboard Data' },
        { key: 'informationBox1', label: 'Information Box 1' },
        { key: 'informationBox2', label: 'Information Box 2' },
        { key: 'purchaseAndSalesChart', label: 'Purchase And Sales Chart' },
        { key: 'recentlyAddedItemsList', label: 'Recently Added Items List' },
        { key: 'stockAlertList', label: 'Stock Alert List' },
        { key: 'trendingItemsChart', label: 'Trending Items Chart' },
        { key: 'recentSalesInvoiceList', label: 'Recent Sales Invoice List' }
      ]
    },
    { 
      id: 'accounts', 
      name: 'Accounts',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' },
        { key: 'addMoneyDeposit', label: 'Add Money Deposit' },
        { key: 'editMoneyDeposit', label: 'Edit Money Deposit' },
        { key: 'deleteMoneyDeposit', label: 'Delete Money Deposit' },
        { key: 'viewMoneyDeposit', label: 'View Money Deposit' },
        { key: 'addMoneyTransfer', label: 'Add Money Transfer' },
        { key: 'editMoneyTransfer', label: 'Edit Money Transfer' },
        { key: 'deleteMoneyTransfer', label: 'Delete Money Transfer' },
        { key: 'viewMoneyTransfer', label: 'View Money Transfer' },
        { key: 'cashTransactions', label: 'Cash Transactions' }
      ]
    },
    { 
      id: 'expense', 
      name: 'Expense',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' },
        { key: 'categoryAdd', label: 'Category Add' },
        { key: 'categoryEdit', label: 'Category Edit' },
        { key: 'categoryDelete', label: 'Category Delete' },
        { key: 'categoryView', label: 'Category View' },
        { key: 'showAllUsersExpenses', label: 'Show all users Expenses' }
      ]
    },
    { 
      id: 'items', 
      name: 'Items',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' },
        { key: 'categoryAdd', label: 'Category Add' },
        { key: 'categoryEdit', label: 'Category Edit' },
        { key: 'categoryDelete', label: 'Category Delete' },
        { key: 'categoryView', label: 'Category View' },
        { key: 'printLabels', label: 'Print Labels' }
      ]
    },
    { 
      id: 'suppliers', 
      name: 'Suppliers',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' },
        { key: 'addPayment', label: 'Add Payment' },
        { key: 'viewPayment', label: 'View Payment' },
        { key: 'deletePayment', label: 'Delete Payment' },
        { key: 'addPurchaseReturn', label: 'Add Purchase Return' },
        { key: 'deletePurchaseReturn', label: 'Delete Purchase Return' }
      ]
    },
    { 
      id: 'customers', 
      name: 'Customers',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' },
        { key: 'addPayment', label: 'Add Payment' },
        { key: 'viewPayment', label: 'View Payment' },
        { key: 'deletePayment', label: 'Delete Payment' },
        { key: 'addSalesReturn', label: 'Add Sales Return' },
        { key: 'deleteSalesReturn', label: 'Delete Sales Return' }
      ]
    },
    { 
      id: 'purchase', 
      name: 'Purchase',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' }
      ]
    },
    { 
      id: 'sales', 
      name: 'Sales',
      permissionsList: [
        { key: 'add', label: 'Add' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' },
        { key: 'view', label: 'View' }
      ]
    },
    { 
      id: 'reports', 
      name: 'Reports',
      permissionsList: [
        { key: 'profitLossReport', label: 'Profit Loss Report' },
        { key: 'purchaseReport', label: 'Purchase Report' },
        { key: 'salesReport', label: 'Sales Report' },
        { key: 'itemsReport', label: 'Items Report' },
        { key: 'expenseReport', label: 'Expense Report' },
        { key: 'incomeReport', label: 'Income Report' },
        { key: 'customerReport', label: 'Customer Report' },
        { key: 'supplierReport', label: 'Supplier Report' }
      ]
    }
  ];

  const handleSelectAll = (moduleId) => {
    const currentSelectAll = permissions[moduleId].selectAll;
    const newPermissions = {};
    
    Object.keys(permissions[moduleId].permissions).forEach(key => {
      newPermissions[key] = !currentSelectAll;
    });

    setPermissions(prev => ({
      ...prev,
      [moduleId]: {
        selectAll: !currentSelectAll,
        permissions: newPermissions
      }
    }));
  };

  const handleSpecificPermission = (moduleId, permissionKey) => {
    const newModulePermissions = {
      ...permissions[moduleId].permissions,
      [permissionKey]: !permissions[moduleId].permissions[permissionKey]
    };
    
    // Check if all specific permissions are selected
    const allSelected = Object.values(newModulePermissions).every(val => val === true);
    
    setPermissions(prev => ({
      ...prev,
      [moduleId]: {
        permissions: newModulePermissions,
        selectAll: allSelected
      }
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!roleName.trim()) {
      newErrors.roleName = 'Role Name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      const roleData = {
        roleName,
        description,
        permissions
      };
      console.log('Saving role:', roleData);
      alert('Role saved successfully!');
    }
  };

  const handleClose = () => {
    if (confirm('Are you sure you want to close? Any unsaved changes will be lost.')) {
      console.log('Form closed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
          <div className="flex items-center justify-start gap-2">
            <h1 className="text-2xl font-bold text-gray-800">New Role</h1>
            <div className="text-sm text-gray-500">Add/Update Role</div>
          </div>
          {/* Form Section */}
        <div className="bg-white  p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Role Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Role Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={roleName}
                onChange={(e) => {
                  setRoleName(e.target.value);
                  if (errors.roleName) setErrors(prev => ({ ...prev, roleName: '' }));
                }}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.roleName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter role name"
              />
              {errors.roleName && (
                <p className="text-red-500 text-sm mt-1">{errors.roleName}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter description"
                rows="2"
              />
            </div>
          </div>
        </div>
        </div>

        

        {/* Permissions Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-12">#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-48">Modules</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-40">Select All</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Specific Permissions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {modules.map((module, index) => (
                  <tr key={module.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600 align-top">{index + 1}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 align-top">{module.name}</td>
                    <td className="px-6 py-4 align-top">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={permissions[module.id].selectAll}
                          onChange={() => handleSelectAll(module.id)}
                          className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
                        />
                        <span className="ml-2 text-sm text-gray-700">Select All</span>
                      </label>
                    </td>
                    <td className="px-6 py-4">
                      <div className="grid grid-cols-2 gap-3">
                        {module.permissionsList.map((perm) => (
                          <label key={perm.key} className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={permissions[module.id].permissions[perm.key]}
                              onChange={() => handleSpecificPermission(module.id, perm.key)}
                              className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
                            />
                            <span className="ml-2 text-sm text-gray-700">{perm.label}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Action Buttons */}
          <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-200">
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <X size={18} />
              Close
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <Save size={18} />
              Save Role
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRole;