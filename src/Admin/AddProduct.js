import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    sizes: "",
    colors: "",
    fabric: "",
    type: "",
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

  // Handle normal inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Select up to 5 images
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    if (files.length > 5) {
      alert("You can select maximum 5 images.");
      return;
    }

    setSelectedImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));

    setImagePreviews(previews);

    // Clear previously uploaded images
    setFormData({
      ...formData,
      images: [],
    });
  };

  // Upload all images to Cloudinary
  const uploadImages = async () => {
    if (!selectedImages.length) {
      alert("Please choose product images first.");
      return [];
    }

    try {
      setUploading(true);

      const uploadedUrls = [];

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

      setFormData((previousData) => ({
        ...previousData,
        images: uploadedUrls,
      }));

      alert("All images uploaded successfully!");

      return uploadedUrls;
    } catch (error) {
      console.log("Image upload error:", error.response?.data || error.message);

      alert("Image upload failed!");
      return [];
    } finally {
      setUploading(false);
    }
  };

  // Add Product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrls = formData.images;

      // Upload images if they haven't been uploaded
      if (!imageUrls.length) {
        if (!selectedImages.length) {
          alert("Please choose product images.");
          return;
        }

        imageUrls = await uploadImages();
      }

      if (!imageUrls.length) {
        return;
      }

      const productData = {
        name: formData.name,
        description: formData.description,

        productDetails: formData.productDetails,
        delivery: formData.delivery,
        returnsAndExchange: formData.returnsAndExchange,
        careInstructions: formData.careInstructions,
        type: formData.type,
        price: Number(formData.price),
        category: formData.category,
        fabric: formData.fabric,
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

      console.log("Product data:", productData);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://baroque-clone-backend-production.up.railway.app/products/addProduct",
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Product added:", response.data);

      alert("Product added successfully!");

      navigate("/admin/products");
    } catch (error) {
      console.log("Product error:", error.response?.data || error.message);

      alert("Product could not be added!");
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-white px-5 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-2xl uppercase tracking-[0.2em]">Add Product</h1>

            <p className="mt-3 text-sm text-gray-500">
              Add a new product to your collection
            </p>
          </div>

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
                placeholder="e.g. Unstitched"
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
            <div className="mb-3">
              <label className="form-label">TYPE</label>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, type: "UNSTITCHED" })
                  }
                  className={`px-4 py-2 border bg-transparent ${
                    formData.type === "UNSTITCHED"
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                >
                  UNSTITCHED
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: "STITCHED" })}
                  className={`px-4 py-2 border bg-transparent ${
                    formData.type === "STITCHED"
                      ? "border-black"
                      : "border-gray-300"
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

            {/* PRODUCT IMAGES */}
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2">
                Product Images
              </label>

              <p className="text-xs text-gray-500 mb-3">
                Select up to 5 images for this product.
              </p>

              {/* File Input */}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="w-full border border-gray-300 px-4 py-3 text-sm"
              />

              {/* Image Previews */}
              {imagePreviews.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                    Image Preview
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {imagePreviews.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image}
                          alt={`Product Preview ${index + 1}`}
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

              {/* Upload Button */}
              {selectedImages.length > 0 && !formData.images.length && (
                <button
                  type="button"
                  onClick={uploadImages}
                  disabled={uploading}
                  className="mt-5 bg-gray-900 text-white px-6 py-3 text-xs uppercase tracking-wider hover:bg-gray-700 transition disabled:opacity-50"
                >
                  {uploading ? "Uploading Images..." : "Upload Images"}
                </button>
              )}

              {/* Uploaded message */}
              {formData.images.length > 0 && (
                <p className="mt-4 text-sm text-green-600">
                  ✓ {formData.images.length} images uploaded successfully
                </p>
              )}
            </div>

            {/* Add Product */}
            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-black text-white py-4 text-sm uppercase tracking-[0.15em] hover:bg-gray-800 transition disabled:opacity-50"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
