import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://baroque-clone-backend-production.up.railway.app/admin/login", data)
      .then((res) => {
        console.log("Admin login:", res.data);

        // Save ADMIN token
        localStorage.setItem("token", res.data.token);

        // Save admin information
        localStorage.setItem("admin", JSON.stringify(res.data.admin));

        alert("Admin login successful!");

        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.log(
          "Admin login error:",
          error.response?.data || error.message,
        );

        alert(error.response?.data?.message || "Admin login failed!");
      });
  }

  return (
    <div className="min-h-screen bg-white flex justify-center px-5 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-2xl tracking-[0.2em] font-normal text-gray-900 uppercase">
            Admin Login
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Sign in to your administrator account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black transition"
            />
          </div>

          <div className="relative block text-xs uppercase tracking-wider text-gray-700 mb-2">
            <label className="block text-xs uppercase tracking-wider text-gray-700 mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute pt-4 right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
            >
              {showPassword ? <FiEyeOff size={14} /> : <FiEye size={14} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => alert("Password reset feature is coming soon.")}
              className="text-xs text-gray-600 underline underline-offset-4 hover:text-black transition"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3.5 text-sm uppercase tracking-[0.15em] hover:bg-gray-800 transition duration-300"
          >
            Admin Login
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Don't have an admin account?</p>

          <button
            type="button"
            onClick={() => navigate("/admin/register")}
            className="mt-2 text-sm underline underline-offset-4 !text-black hover:text-gray-500 transition"
          >
            Create Admin Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
