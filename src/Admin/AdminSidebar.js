import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiBox, FiShoppingBag, FiUsers, FiGrid } from "react-icons/fi";

function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    navigate("/admin/login");
  };

  const linkClass = ({ isActive }) =>
    `text-white no-underline p-3 rounded transition flex items-center gap-3 ${
      isActive ? "bg-gray-700" : "hover:bg-gray-800"
    }`;

  return (
    <div className="bg-black text-white w-64 h-screen p-4 sticky top-0">
      <h2 className="text-2xl font-semibold mb-8">BAROQUE</h2>

      <div className="flex flex-col gap-2">
        <NavLink to="/admin/dashboard" className={linkClass}>
          <FiHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/products" className={linkClass}>
          <FiBox />
          <span>Products</span>
        </NavLink>

        <NavLink to="/admin/orders" className={linkClass}>
          <FiShoppingBag />
          <span>Orders</span>
        </NavLink>

        <NavLink to="/admin/users" className={linkClass}>
          <FiUsers />
          <span>Users</span>
        </NavLink>

        <NavLink to="/admin/categories" className={linkClass}>
          <FiGrid />
          <span>Categories</span>
        </NavLink>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-8 w-full p-3 text-left text-white border border-gray-700 rounded hover:bg-gray-800 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
