import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";
import avatar from "../assets/avatar.png";
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";
import CartModal from "../pages/shop/CartModal";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cart modal
  const [isCartOpen, setIsCartOpen] = useState(false);

  // User dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const userDropdownMenus = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/dashboard/profile" },
    { label: "Payments", path: "/dashboard/payments" },
    { label: "Orders", path: "/dashboard/orders" },
  ];

  const adminDropdownMenus = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Manage Items", path: "/dashboard/manage-products" },
    { label: "All Orders", path: "/dashboard/manage-orders" },
    { label: "Add Products", path: "/dashboard/add-products" },
  ];

  const dropdownMenus =
    user?.role === "admin" ? adminDropdownMenus : userDropdownMenus;

  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Logout failed");
    }
  };

  return (
    <header className="w-full border-b bg-white">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl md:hidden"
        >
          <i className="ri-menu-line"></i>
        </button>

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-extrabold">
          Lebaba<span className="text-primary">.</span>
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" }
          ].map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium"
                    : "text-gray-900 hover:text-primary"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-5">

          {/* Search */}
          <NavLink to="/search" className="text-xl">
            <i className="ri-search-line"></i>
          </NavLink>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative text-xl"
          >
            <i className="ri-shopping-bag-line"></i>
            <sup className="absolute -top-2 -right-3 text-[10px] w-4 h-4 flex items-center justify-center text-white bg-primary rounded-full">
              {products.length}
            </sup>
          </button>

          {/* User */}
          {user ? (
            <div className="relative flex items-center justify-center w-8 h-8">
              <img
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                src={avatar}
                alt="Profile"
                className="w-full h-full rounded-full object-cover cursor-pointer"
              />

              {isDropdownOpen && (
                <div className="absolute right-0 top-10 w-48 bg-white border rounded-lg shadow-lg z-20">
                  <ul className="p-4 space-y-3 font-medium">
                    {dropdownMenus.map((menu) => (
                      <li key={menu.label}>
                        <Link to={menu.path}>{menu.label}</Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-red-500"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="text-xl">
              <i className="ri-user-line"></i>
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: "Pages", path: "/pages" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block font-medium text-gray-900"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
