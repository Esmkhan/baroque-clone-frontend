import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function AdminLayout() {
  const token = localStorage.getItem("token");
  const admin = JSON.parse(localStorage.getItem("admin"));

  if (!token || !admin || admin.role !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
