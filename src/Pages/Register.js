import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
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

    axios
      .post("https://baroque-clone-backend-production.up.railway.app/users/registerUser", data)
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));

          alert("Account created successfully!");

          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.response?.data?.message || "Registration failed");
      });
  }

  return (
    <div className="min-h-screen bg-white flex justify-center px-5 py-16">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl tracking-[0.2em] font-normal text-gray-900 uppercase">
            Create Account
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Create an account to continue shopping
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-700 mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={data.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black transition"
            />
          </div>

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
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black transition"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3.5 text-sm uppercase tracking-[0.15em] hover:bg-gray-800 transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Login */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Already have an account?</p>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="mt-2 text-sm underline underline-offset-4 text-black hover:text-gray-500 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
