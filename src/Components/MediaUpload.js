import React, { useState } from "react";
import axios from "axios";

function MediaUpload() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "https://baroque-clone-backend-production.up.railway.app/api/media",
        formData,
      );

      console.log("Uploaded Media:", response.data);

      alert("Image uploaded successfully!");

      setTitle("");
      setImage(null);
    } catch (error) {
      console.log(error);
      alert("Image upload failed");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Upload Image</h2>

      <form onSubmit={handleUpload}>
        <div className="mb-3">
          <label className="form-label">Title</label>

          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter image title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Select Image</label>

          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Upload Image
        </button>
      </form>
    </div>
  );
}

export default MediaUpload;
