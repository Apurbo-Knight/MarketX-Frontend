import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";
import { useLogoutUserMutation } from "../../redux/features/auth/authApi";
import { logout } from "../../redux/features/auth/authSlice";

const navItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    path: "/dashboard/orders",
    label: "Orders",
  },
  {
    path: "/dashboard/payments",
    label: "Payments",
  },
  {
    path: "/dashboard/profile",
    label: "Profile",
  },
  {
    path: "/dashboard/reviews",
    label: "Reviews",
  },
];

const UserDashboard = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Error to logout", error);
    }
  };
  return (
    <div className="space-y-5 bg-white p-8 md:h-screen flex flex-col justify-between">
      <div>
        <div>
          <Link to="/" className="font-bold text-2xl">
            Alibaba.
          </Link>
          <p className="text-xs italic">User Dashboard</p>
        </div>
        <hr className="mt-5" />

        <ul className="space-y-5 pt-5">
          {navItems.map((navItem, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-semibold" : "text-black"
                }
                to={navItem.path}
              >
                {navItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* logout */}
      <div className="mb-3">
        <hr className="mb-3" />
        <button
          onClick={handelLogout}
          className="text-white bg-red-500 font-medium px-5 py-1 rounded-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
