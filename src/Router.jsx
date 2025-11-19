import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

// ✅ Single unified layout
import AppLayout from "./layout/AppLayout";

// Super Admin pages
import Dashboard from "./pages/Dashboard";
import Tenants from "./pages/Tenants";
import PlansSection from "./pages/PlansSection";
import Subscription from "./pages/Subscription";
import UsersSection from "./pages/UsersSection";
import StoreTab from "./pages/StoreTab";
import SmsApi from "./pages/SmsApi";
import TaxlistSection from "./pages/TaxlistSection";
import UnitListSection from "./pages/UnitListSection";
import PaymentTypeSection from "./pages/PaymentTypeSection";
import ChangePass from "./pages/ChangePass";

// Store Admin pages
import StoreDashboard from "./pages/storeadminpages/StoreDashboard";
import Users from "./pages/storeadminpages/Users";
import RolesList from "./pages/storeadminpages/RolesList";
import Pos from "./pages/storeadminpages/Pos";
import AddSales from "./pages/storeadminpages/AddSales";
import SalesList from "./pages/storeadminpages/SalesList";
import SalesPayment from "./pages/storeadminpages/SalesPayment";
import SalesReturn from "./pages/storeadminpages/SalesReturn";
import AddCustomer from "./pages/storeadminpages/AddCustomer";
import CustomerList from "./pages/storeadminpages/CustomerList";
import SupplierList from "./pages/storeadminpages/SupplierList";
import AddSupplier from "./pages/storeadminpages/AddSupplier";
import ImportCustomer from "./pages/storeadminpages/ImportCustomer";
import ImportSupplier from "./pages/storeadminpages/ImportSupplier";
import AddAdvance from "./pages/storeadminpages/AddAdvance";
import AdvanceList from "./pages/storeadminpages/AdvanceList";
import CreateCutomerCoupon from "./pages/storeadminpages/CreateCutomerCoupon";
import CustomerCouponList from "./pages/storeadminpages/CustomerCouponList";
import CreateCoupon from "./pages/storeadminpages/CreateCoupon";
import CouponsMaster from "./pages/storeadminpages/CouponsMaster";
import NewPurchase from "./pages/storeadminpages/NewPurchase";
import PurchaseList from "./pages/storeadminpages/PurchaseList";
import PurchaseReturnList from "./pages/storeadminpages/PurchaseReturnList";
import AddAccount from "./pages/storeadminpages/AddAccount";
import AccountList from "./pages/storeadminpages/AccountList";
import MoneyTransferList from "./pages/storeadminpages/MoneyTransferList";
import DepositeList from "./pages/storeadminpages/DepositeList";
import CashTransaction from "./pages/storeadminpages/CashTransaction";
import AddItems from "./pages/storeadminpages/AddItems";
import AddServices from "./pages/storeadminpages/AddServices";
import ItemList from "./pages/storeadminpages/ItemList";
import CategoriesList from "./pages/storeadminpages/CategoriesList";
import BrandList from "./pages/storeadminpages/BrandList";
import VariantList from "./pages/storeadminpages/VariantList";
import PrintVariable from "./pages/storeadminpages/PrintVariable";
import ImportItem from "./pages/storeadminpages/ImportItem";
import ImportServices from "./pages/storeadminpages/ImportServices";
import AdjustmentList from "./pages/storeadminpages/AdjustmentList";
import TransferList from "./pages/storeadminpages/TransferList";
import Expenselist from "./pages/storeadminpages/Expenselist";
import ExpenseCategoriesList from "./pages/storeadminpages/ExpenseCategoriesList";
import CountriesList from "./pages/storeadminpages/CountriesList";
import StateList from "./pages/storeadminpages/StateList";
import SendMessage from "./pages/storeadminpages/SendMessage";
import MessagingTemplate from "./pages/storeadminpages/MessagingTemplate";
import AddWarehouse from "./pages/storeadminpages/AddWarehouse";
import WarehouseList from "./pages/storeadminpages/WarehouseList";
import NewQuotation from "./pages/storeadminpages/NewQuotation";
import SMTP from "./pages/storeadminpages/SMTP";
import CurrencyList from "./pages/storeadminpages/CurrencyList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌐 Public Route */}
        <Route path="/" element={<Login />} />

        {/* ✅ SUPER ADMIN ROUTES */}
        <Route
          path="/app"
          element={
            <ProtectedRoute role="superadmin">
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="tenants" element={<Tenants />} />
          <Route path="planssection" element={<PlansSection />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="usersection" element={<UsersSection />} />
          <Route path="storetab" element={<StoreTab />} />
          <Route path="smsapi" element={<SmsApi />} />
          <Route path="taxlistsection" element={<TaxlistSection />} />
          <Route path="unitlistsection" element={<UnitListSection />} />
          <Route path="paymenttypesection" element={<PaymentTypeSection />} />
          <Route path="changepass" element={<ChangePass />} />
        </Route>

        {/* ✅ STORE ADMIN ROUTES */}
        <Route
          path="/store"
          element={
            <ProtectedRoute role="storeadmin">
              <AppLayout />
              {/* ✅ same layout — handles sidebar conditionally */}
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<StoreDashboard />} />
          <Route path="userlist" element={<Users />} />
          <Route path="roleslist" element={<RolesList />} />
          <Route path="pos" element={<Pos />} />
          <Route path="addsales" element={<AddSales />} />
          <Route path="saleslist" element={<SalesList />} />
          <Route path="salespayment" element={<SalesPayment />} />
          <Route path="salesreturnlist" element={<SalesReturn />} />
          <Route path="addcustomer" element={<AddCustomer />} />
          <Route path="customerlist" element={<CustomerList />} />
          <Route path="supplierlist" element={<SupplierList />} />
          <Route path="addsupplier" element={<AddSupplier />} />
          <Route path="importcustomer" element={<ImportCustomer />} />
          <Route path="importsupplier" element={<ImportSupplier />} />
          <Route path="addadvance" element={<AddAdvance />} />
          <Route path="advancelist" element={<AdvanceList />} />
          <Route
            path="createcustomercoupon"
            element={<CreateCutomerCoupon />}
          />
          <Route path="customercouponlist" element={<CustomerCouponList />} />
          <Route path="createcoupon" element={<CreateCoupon />} />
          <Route path="CouponsMaster" element={<CouponsMaster />} />
          <Route path="newquotation" element={<NewQuotation />} />
          <Route path="newpurchase" element={<NewPurchase />} />
          <Route path="purchaselist" element={<PurchaseList />} />
          <Route path="purchasereturnlist" element={<PurchaseReturnList />} />
          <Route path="addaccount" element={<AddAccount />} />
          <Route path="accountlist" element={<AccountList />} />
          <Route path="moneytransferlist" element={<MoneyTransferList />} />
          <Route path="depositelist" element={<DepositeList />} />
          <Route path="cashtransaction" element={<CashTransaction />} />
          <Route path="additem" element={<AddItems />} />
          <Route path="addservice" element={<AddServices />} />
          <Route path="itemlist" element={<ItemList />} />
          <Route path="categorieslist" element={<CategoriesList />} />
          <Route path="brandlist" element={<BrandList />} />
          <Route path="variantlist" element={<VariantList />} />

          <Route path="printvariables" element={<PrintVariable />} />
          <Route path="importitem" element={<ImportItem />} />
          <Route path="importservices" element={<ImportServices />} />
          <Route path="adjustmentlist" element={<AdjustmentList />} />
          <Route path="transferlist" element={<TransferList />} />
          <Route path="expenseslist" element={<Expenselist />} />
          <Route
            path="expensecategorieslist"
            element={<ExpenseCategoriesList />}
          />
          <Route path="countrieslist" element={<CountriesList />} />
          <Route path="statelist" element={<StateList />} />
          <Route path="sendmessage" element={<SendMessage />} />
          <Route path="messagingtemplate" element={<MessagingTemplate />} />
          <Route path="addwarehouse" element={<AddWarehouse />} />
          <Route path="warehouselist" element={<WarehouseList />} />
          <Route path="paymenttypesection" element={<PaymentTypeSection />} />
          <Route path="unitlistsection" element={<UnitListSection />} />
          <Route path="changepass" element={<ChangePass />} />
          <Route path="smsapi" element={<SmsApi />} />
          <Route path="smtp" element={<SMTP />} />
          <Route path="storetab" element={<StoreTab />} />
          <Route path="currencylist" element={<CurrencyList />} />
        </Route>

        {/* 🚧 Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
