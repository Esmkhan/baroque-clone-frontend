import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Get all products
  useEffect(() => {
    axios
      .get("http://localhost:5000/products/getProducts")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Something went wrong:", err);
        setLoading(false);
      });
  }, []);

  // Edit product
  function update(id) {
    navigate("/admin/editProduct", {
      state: { productId: id },
    });
  }

  // Delete product
  function remove(id) {
    console.log("DELETE ID:", id);

    const token = localStorage.getItem("token");

    axios
      .delete("http://localhost:5000/products/deleteProduct/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Product deleted:", res.data);

        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== id),
        );

        alert("Product deleted successfully!");
      })
      .catch((err) => {
        console.log("Delete error:", err.response?.data || err.message);

        alert("Product could not be deleted!");
      });
  }

  // Loading message
  if (loading) {
    return (
      <div className="text-center mt-16">
        <p className="text-sm text-gray-500">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="mt-16">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-xl uppercase tracking-[0.2em]">Products</h2>

        <p className="mt-2 text-sm text-gray-500">
          Manage your product collection
        </p>
      </div>

      {/* Add Product Button */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => navigate("/admin/addProduct")}
          className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-800"
        >
          Add Product
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border border-gray-200 bg-white">
            {/* Product Image */}
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-80 object-contain"
            />

            {/* Product Details */}
            <div className="p-5">
              <h3 className="text-sm uppercase tracking-wider">
                {product.name}
              </h3>

              <p className="mt-2 text-sm text-gray-600">Rs. {product.price}</p>

              <p className="mt-2 text-xs text-gray-500">
                Category: {product.category}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Stock: {product.stock}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => update(product._id)}
                  className="flex-1 border border-black py-2 text-xs uppercase tracking-wider hover:bg-black hover:text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => remove(product._id)}
                  className="flex-1 bg-black text-white py-2 text-xs uppercase tracking-wider hover:bg-gray-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProducts;
