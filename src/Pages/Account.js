import React from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white px-5 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl tracking-[0.2em] uppercase font-normal">
            My Account
          </h1>

          <p className="mt-3 text-sm text-gray-500">Welcome back to Baroque</p>
        </div>

        <div className="border border-gray-200 p-8">
          <h2 className="text-sm uppercase tracking-[0.15em] mb-5">
            Account Information
          </h2>

          <div className="border-b border-gray-200 pb-5 mb-0">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Name
            </p>

            <p className="text-sm text-gray-900">{user?.name}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Email
            </p>

            <p className="text-sm text-gray-900">{user?.email}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full mt-8 bg-black text-white py-3.5 text-sm uppercase tracking-[0.15em] hover:bg-gray-800 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Account;
