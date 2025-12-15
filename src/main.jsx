import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";
import Shop from "./pages/shop/Shop.jsx";
import CategoryPage from "./pages/category/CategoryPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import SingleProduct from "./pages/shop/productDetails/SingleProduct.jsx";
import PaymentSuccess from "./components/PaymentSuccess.jsx";
import DashboardLayout from "./pages/dashboard/DashboardLayout.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import UserDMain from "./pages/dashboard/user/dashboard/UserDMain.jsx";
import UserOrder from "./pages/dashboard/user/orders/UserOrder.jsx";
import OrderDetails from "./pages/dashboard/user/orders/OrderDetails.jsx";
import UserReviews from "./pages/dashboard/user/reviews/UserReviews.jsx";
import UserProfile from "./pages/dashboard/user/profile/UserProfile.jsx";
import AdminDMain from "./pages/dashboard/admin/dashboard/AdminDMain.jsx";
import ManageUsers from "./pages/dashboard/admin/manageUsers/ManageUsers.jsx";
import ManageOrders from "./pages/dashboard/admin/manageOrders/ManageOrders.jsx";
import AddProduct from "./pages/dashboard/admin/addProduct/AddProduct.jsx";
import ManageProducts from "./pages/dashboard/admin/manageProduct/ManageProducts.jsx";
import UpdateProduct from "./pages/dashboard/admin/manageProduct/UpdateProduct.jsx";
import UserPayments from "./pages/dashboard/user/payments/UserPayments.jsx";


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/orders/:orderId" element={<OrderDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          {/* user routes */}
          <Route index element={<UserDMain />} />
          <Route path="orders" element={<UserOrder />} />
          <Route path="payments" element={<UserPayments />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="reviews" element={<UserReviews />} />
          {/* admin routes */}
          <Route
            path="admin"
            element={
              <PrivateRoute role="admin">
                <AdminDMain />
              </PrivateRoute>
            }
          />
          <Route
            path="add-product"
            element={
              <PrivateRoute role="admin">
                <AddProduct/>
              </PrivateRoute>
            }
          />
          <Route
            path="manage-products"
            element={
              <PrivateRoute role="admin">
                <ManageProducts/>
              </PrivateRoute>
            }
          />
          <Route
            path="update-product/:id"
            element={
              <PrivateRoute role="admin">
                <UpdateProduct/>
              </PrivateRoute>
            }
          />
          <Route
            path="manage-orders"
            element={
              <PrivateRoute role="admin">
                <ManageOrders/>
              </PrivateRoute>
            }
          />
          <Route
            path="users"
            element={
              <PrivateRoute role="admin">
                <ManageUsers />{" "}
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
