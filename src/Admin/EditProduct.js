import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function EditProduct() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get product ID from AdminProducts
  const productId = location.state?.productId;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    sizes: "",
    colors: "",
    type: "",
    fabric: "",
    stock: "",
    images: [],
    productDetails: "",
    delivery: "",
    returnsAndExchange: "",
    careInstructions: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const [uploading, setUploading] = useState(false);

  // Get Single Product
  useEffect(() => {
    if (!productId) {
      return;
    }

    axios
      .get("https://baroque-clone-backend-production.up.railway.app/products/singleProduct/" + productId)
      .then((res) => {
        console.log("Product:", res.data);

        const product = res.data;

        setFormData({
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          type: product.type,
          fabric: product.fabric,
          sizes: product.sizes.join(", "),
          colors: product.colors.join(", "),
          stock: product.stock,
          images: product.images || [],
          productDetails: product.productDetails || "",
          delivery: product.delivery || "",
          returnsAndExchange: product.returnsAndExchange || "",
          careInstructions: product.careInstructions || "",
        });
        // Show existing images
        if (product.images && product.images.length > 0) {
          setImagePreviews(product.images);
        }
      })
      .catch((err) => {
        console.log("Something went wrong:", err.response?.data || err.message);
      });
  }, [productId]);

  // Handle Normal Inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Select New Images
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) {
      return;
    }

    // Maximum 5 images
    if (files.length > 5) {
      alert("You can select maximum 5 images.");
      return;
    }

    setSelectedImages(files);

    // Create previews
    const previews = files.map((file) => URL.createObjectURL(file));

    setImagePreviews(previews);
  };

  // Upload Images
  const uploadImages = async () => {
    if (!selectedImages.length) {
      return formData.images;
    }
    try {
      setUploading(true);

      const uploadedUrls = [];

      // Upload each image
      for (const image of selectedImages) {
        const imageData = new FormData();

        imageData.append("image", image);

        imageData.append("title", formData.name || "Product Image");

        const response = await axios.post(
          "https://baroque-clone-backend-production.up.railway.app/api/media",
          imageData,
        );

        console.log("Image uploaded:", response.data);

        uploadedUrls.push(response.data.imageUrl);
      }

      return uploadedUrls;
    } catch (error) {
      console.log("Image upload error:", error.response?.data || error.message);

      alert("Image upload failed!");

      return null;
    } finally {
      setUploading(false);
    }
  };

  // Update Product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrls = formData.images;

      // If new images were selected,
      // upload the new  images
      if (selectedImages.length > 0) {
        imageUrls = await uploadImages();

        if (!imageUrls || !imageUrls.length) {
          return;
        }
      }

      // Product data
      const productData = {
        name: formData.name,

        description: formData.description,
        type: formData.type,
        fabric: formData.type,
        productDetails: formData.productDetails,

        delivery: formData.delivery,

        returnsAndExchange: formData.returnsAndExchange,

        careInstructions: formData.careInstructions,

        price: Number(formData.price),

        category: formData.category,

        sizes: formData.sizes
          .split(",")
          .map((size) => size.trim())
          .filter(Boolean),

        colors: formData.colors
          .split(",")
          .map((color) => color.trim())
          .filter(Boolean),

        images: imageUrls,

        stock: Number(formData.stock),
      };

      console.log("Updated product:", productData);

      // Get token
      const token = localStorage.getItem("token");

      // Update product
      const response = await axios.put(
        "https://baroque-clone-backend-production.up.railway.app/products/updateProduct/" + productId,

        productData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Product updated:", response.data);

      alert("Product updated successfully!");

      // Go back
      navigate("/admin/products");
    } catch (error) {
      console.log(
        "Update product error:",
        error.response?.data || error.message,
      );

      alert("Product could not be updated!");
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-white px-5 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-2xl uppercase tracking-[0.2em]">
              Edit Product
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Update your product information
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="border border-gray-200 p-8 space-y-6"
          >
            {/* Product Name */}

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Product Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            {/* Description */}

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Fabric
              </label>

              <input
                type="text"
                name="fabric"
                value={formData.fabric}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            {/* Price + Stock */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}

              <div>
                <label className="block text-xs uppercase tracking-wider mb-2">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
                />
              </div>

              {/* Stock */}

              <div>
                <label className="block text-xs uppercase tracking-wider mb-2">
                  Stock
                </label>

                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
                />
              </div>
            </div>

            {/* Category */}

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Category
              </label>

              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            {/* Sizes */}

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Sizes
              </label>

              <input
                type="text"
                name="sizes"
                value={formData.sizes}
                onChange={handleChange}
                placeholder="e.g. Small, Medium, Large"
                required
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            {/* Colors */}

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Colors
              </label>

              <input
                type="text"
                name="colors"
                value={formData.colors}
                onChange={handleChange}
                placeholder="e.g. Black, White"
                required
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>
            {/* Product Details */}

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Product Details
              </label>

              <textarea
                name="productDetails"
                value={formData.productDetails}
                onChange={handleChange}
                rows="4"
                placeholder="Enter product details..."
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">TYPE</label>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      type: "UNSTITCHED",
                    })
                  }
                  className={`px-4 py-2 border ${
                    formData.type === "UNSTITCHED"
                      ? "border-black bg-black text-white"
                      : "border-gray-300 bg-white text-black"
                  }`}
                >
                  UNSTITCHED
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      type: "STITCHED",
                    })
                  }
                  className={`px-4 py-2 border ${
                    formData.type === "STITCHED"
                      ? "border-black bg-black text-white"
                      : "border-gray-300 bg-white text-black"
                  }`}
                >
                  STITCHED
                </button>
              </div>
            </div>

            {/* Delivery */}

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Delivery
              </label>

              <textarea
                name="delivery"
                value={formData.delivery}
                onChange={handleChange}
                rows="4"
                placeholder="Enter delivery information..."
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            {/* Returns and Exchange */}

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Returns and Exchange
              </label>

              <textarea
                name="returnsAndExchange"
                value={formData.returnsAndExchange}
                onChange={handleChange}
                rows="4"
                placeholder="Enter returns and exchange information..."
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            {/* Care Instructions */}

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Care Instructions
              </label>

              <textarea
                name="careInstructions"
                value={formData.careInstructions}
                onChange={handleChange}
                rows="4"
                placeholder="Enter care instructions..."
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            {/* Product Images */}

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Product Images
              </label>

              <p className="text-xs text-gray-500 mb-3">
                You can select up to 5 images.
              </p>

              {/* File Input */}

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="w-full border border-gray-300 px-4 py-3 text-sm"
              />

              {/* Image Preview */}

              {imagePreviews.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                    Product Images
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {imagePreviews.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image}
                          alt={`Product ${index + 1}`}
                          className="w-full h-40 object-cover"
                        />

                        <p className="text-xs text-center mt-2 text-gray-500">
                          Image {index + 1}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Update Button */}

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-black text-white py-4 text-sm uppercase tracking-[0.15em] hover:bg-gray-800 transition disabled:opacity-50"
            >
              {uploading ? "Uploading Images..." : "Update Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
