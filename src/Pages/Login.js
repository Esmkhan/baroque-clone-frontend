import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const newdata = { ...data };
    console.log(newdata);
    newdata[e.target.name] = e.target.value;
    console.log(newdata);
    setData(newdata);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    axios
      .post(`https://baroque-clone-backend-production.up.railway.app/users/loginUser`, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: res.data.user.id,
            name: res.data.user.name,
            email: res.data.user.email,
          }),
        );
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Login failed! Enter Correct Email and password");
      });
  }

  return (
    <div className="min-h-screen bg-white flex justify-center px-5 py-16">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl tracking-[0.2em] font-normal text-gray-900 uppercase">
            Sign In
          </h1>

          <p className="mt-3 text-sm text-gray-500">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
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

          {/* Password */}

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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3.5 text-sm uppercase tracking-[0.15em] hover:bg-gray-800 transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Register */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Don't have an account?</p>

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="mt-2 text-sm underline underline-offset-4 !text-black hover:text-gray-500 transition"
          >
            {" "}
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
