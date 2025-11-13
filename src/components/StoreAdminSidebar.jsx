import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  BarChart,
  Package,
  Users,
  Settings,
  ChevronDown,
  Store,
  Truck,
  CreditCard,
  Percent,
  Lock,
  MessageSquare,
  List,
  CirclePlus,
  DollarSign,
  LucideShare,
  MailIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoreAdminSidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // ✅ Main Menu Items
  const mainMenu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/store/dashboard" },
  ];

  // ✅ Dropdown Menus
  const dropdownMenus = [
    {
      id: "users",
      name: "Users",
      icon: Store,
      submenu: [
        { name: "Userlist", path: "/store/userlist", icon: List },
        { name: "RolesList", path: "/store/rolesList", icon: List },
      ],
    },
    {
      id: "sales",
      name: "Sales Management",
      icon: CreditCard,

      submenu: [
        { name: "POS", path: "pos", icon: CirclePlus },
        { name: "ADD SALES", path: "/store/addsales", icon: CirclePlus },
        { name: "Sales List", path: "/store/saleslist", icon: List },
        { name: "Sales Payment", path: "/store/salespayment", icon: List },
        {
          name: "Sales Return list",
          path: "/store/salesreturnlist",
          icon: List,
        },
      ],
    },
    {
      id: "Contacts",
      name: "Contacts",
      icon: Truck,
      submenu: [
        { name: "Add Customer", path: "/store/addcustomer", icon: CirclePlus },
        {
          name: "Customer List",
          path: "/store/customerlist",
          icon: List,
        },
        { name: "Add Supplier", path: "/store/addsupplier", icon: CirclePlus },
        { name: "Supplier List", path: "/store/supplierlist", icon: List },
        {
          name: "Import Customer",
          path: "/store/importcustomer",
          icon: CirclePlus,
        },
        {
          name: "Import Supplier",
          path: "/store/importsupplier",
          icon: CirclePlus,
        },
      ],
    },
    {
      id: "advance",
      name: "Advance",
      icon: DollarSign,
      submenu: [
        { name: "Add Advance", path: "/store/addadvance", icon: CirclePlus },
        { name: "Advance List", path: "/store/advancelist", icon: List },
      ],
    },
    {
      id: "coupons",
      name: "coupons",
      icon: Lock,
      submenu: [
        {
          name: "Create Customer Coupon",
          path: "/store/createcustomercoupon",
          icon: CirclePlus,
        },
        {
          name: "Customer Coupon List",
          path: "/store/customercouponlist",
          icon: List,
        },
        {
          name: "Create Coupon",
          path: "/store/createcoupon",
          icon: CirclePlus,
        },
        { name: "Coupons Master", path: "/store/couponsmaster", icon: List },
      ],
    },
    {
      id: "quotation",
      name: "Quotation",
      icon: DollarSign,
      submenu: [
        {
          name: "New Quotation",
          path: "/store/newquotation",
          icon: CirclePlus,
        },
        { name: "Quotation List", path: "/store/quotationlist", icon: List },
      ],
    },
    {
      id: "purchase",
      name: "Purchase",
      icon: ShoppingBag,
      submenu: [
        {
          name: "New Purchase",
          path: "/store/newpurchase",
          icon: CirclePlus,
        },
        { name: "Purchase List", path: "/store/purchaselist", icon: List },
        {
          name: "Purchase Return List",
          path: "/store/purchasereturnlist",
          icon: List,
        },
      ],
    },
    {
      id: "accounts",
      name: "Accounts",
      icon: BarChart,
      submenu: [
        {
          name: "Add Account",
          path: "/store/addaccount",
          icon: CirclePlus,
        },
        { name: "Account List", path: "/store/accountlist", icon: List },
        {
          name: "Money Transfer List",
          path: "/store/moneytransferlist",
          icon: List,
        },
        { name: "Deposite List", path: "/store/depositelist", icon: List },
        {
          name: "Cash Transaction",
          path: "/store/cashtransaction",
          icon: LucideShare,
        },
      ],
    },
    {
      id: "items",
      name: "items",
      icon: Package,
      submenu: [
        {
          name: "Add Item",
          path: "/store/additem",
          icon: CirclePlus,
        },
        { name: "Add Service", path: "/store/addservice", icon: CirclePlus },
        {
          name: "Item List",
          path: "/store/itemlist",
          icon: List,
        },
        { name: "Categories List", path: "/store/categorieslist", icon: List },
        {
          name: "Brand List",
          path: "/store/brandlist",
          icon: List,
        },
        {
          name: "Variant List",
          path: "/store/variantlist",
          icon: List,
        },
        {
          name: "Print Variables",
          path: "/store/printvariables",
          icon: List,
        },
        {
          name: "Import Item",
          path: "/store/importitem",
          icon: CirclePlus,
        },
        {
          name: "Import Services",
          path: "/store/importservices",
          icon: CirclePlus,
        },
      ],
    },
    {
      id: "Stock",
      name: "Stock",
      icon: Settings,
      submenu: [
        { name: "Adjustment List", path: "/store/adjustmentlist", icon: List },
        { name: "Transfer List", path: "/store/transferlist", icon: List },
      ],
    },

    {
      id: "expenses",
      name: "Expenses",
      icon: MessageSquare,
      submenu: [
        { name: "Expenses List", path: "/store/expenseslist", icon: List },
        {
          name: "Categories List",
          path: "/store/expensecategorieslist",
          icon: List,
        },
      ],
    },
    {
      id: "places",
      name: "Places",
      icon: MessageSquare,
      submenu: [
        { name: "Countries List", path: "/store/countrieslist", icon: List },
        {
          name: "State List",
          path: "/store/statelist",
          icon: List,
        },
      ],
    },
    {
      id: "messaging",
      name: "Messaging",
      icon: MailIcon,
      submenu: [
        { name: "Send Message", path: "/store/sendmessage", icon: MailIcon },
        {
          name: "Messaging Template",
          path: "/store/messagingtemplate",
          icon: List,
        },
      ],
    },
    {
      id: "Warehouse",
      name: "Warehouse",
      icon: Truck,
      submenu: [
        {
          name: "Add Warehouse",
          path: "/store/addwarehouse",
          icon: CirclePlus,
        },
        {
          name: "Warehouse list",
          path: "/store/warehouselist",
          icon: List,
        },
      ],
    },
    {
      id: "settings",
      name: "Settings",
      icon: Settings,
      submenu: [
        {
          name: "Store",
          path: "/store/storetab",
          icon: CirclePlus,
        },
        {
          name: "Site Settings",
          path: "/store/warehouselist",
          icon: List,
        },
        {
          name: "SMS/Whatsapp API",
          path: "/store/smsapi",
          icon: List,
        },
        {
          name: "SMTP",
          path: "/store/smtp",
          icon: List,
        },
        {
          name: "Tax List",
          path: "/store/taxlist",
          icon: List,
        },
        {
          name: "Units List",
          path: "/store/unitslist",
          icon: List,
        },
        {
          name: "Payment types",
          path: "/store/paymenttypesection",
          icon: List,
        },
        {
          name: "Currency List",
          path: "/store/currencylist",
          icon: List,
        },
        {
          name: "Change Password",
          path: "/store/changepass",
          icon: List,
        },
        {
          name: "Database Backup",
          path: "/store/warehouselist",
          icon: List,
        },
      ],
    },
  ];

  // ✅ Handle Dropdown Toggle
  const handleDropdownClick = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  // ✅ Handle Main Menu Click
  const handleMainMenuClick = () => {
    setOpenDropdown(null);
  };

  return (
    <motion.aside className="w-64 bg-white shadow-lg flex flex-col border-r border-gray-200">
      <nav className="flex-1 overflow-y-auto py-4">
        {/* ✅ Main Menu */}
        {mainMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            onClick={handleMainMenuClick}
            className={({ isActive }) =>
              `w-full flex items-center space-x-3 px-6 py-3 text-sm transition-all duration-200 rounded-r-full ${
                isActive
                  ? "bg-sky-100 text-sky-600 font-semibold border-r-4 border-sky-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}

        {/* ✅ Dropdown Menus */}
        {dropdownMenus.map((menu) => (
          <div key={menu.id} className="mt-2">
            <button
              onClick={() => handleDropdownClick(menu.id)}
              className={`w-full flex items-center justify-between px-6 py-3 text-sm rounded-r-full transition-colors duration-200 ${
                openDropdown === menu.id
                  ? "bg-sky-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center space-x-3">
                <menu.icon className="w-5 h-5" />
                <span>{menu.name}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  openDropdown === menu.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* ✅ Animated Submenu */}
            <AnimatePresence>
              {openDropdown === menu.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-md shadow-inner overflow-hidden"
                >
                  {menu.submenu.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      className={({ isActive }) =>
                        `w-full flex items-center space-x-3 px-10 py-2.5 text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-sky-100 text-sky-600 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`
                      }
                    >
                      {sub.icon && <sub.icon className="w-4 h-4" />}
                      <span>{sub.name}</span>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
    </motion.aside>
  );
}
