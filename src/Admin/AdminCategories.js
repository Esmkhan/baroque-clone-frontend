import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Spinner, Form, Button } from "react-bootstrap";

function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/admin/categories",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("CATEGORIES:", response.data.categories);

      setCategories(response.data.categories);
    } catch (error) {
      console.log("Categories error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Spinner animation="border" />
      </div>
    );
  }

  //add category function
  const createCategory = async () => {
    if (!categoryName.trim()) {
      alert("Please enter category name");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:5000/categories/addCategory",
        {
          name: categoryName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Category created successfully");

      setCategories([...categories, response.data.category]);

      setCategoryName("");
    } catch (error) {
      console.log("Create category error:", error);
      alert(error.response?.data?.message || "Failed to create category");
    }
  };

  //delete category
  const deleteCategory = async (categoryId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/categories/deleteCategory/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setCategories(
        categories.filter((category) => category._id !== categoryId),
      );

      alert("Category deleted successfully");
    } catch (error) {
      console.log("Delete category error:", error);

      alert(error.response?.data?.message || "Failed to delete category");
    }
  };

  return (
    <Container fluid className="py-5 px-4">
      <h1 className="text-3xl font-semibold mb-2 text-center tracking-[2px] py-3">
        Admin Categories
      </h1>

      <p className="text-gray-500 mb-4 text-center">
        Total Categories: {categories.length}
      </p>

      <div className="flex gap-2 mb-4 max-w-md">
        <Form.Control
          type="text"
          placeholder="Enter category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />

        <Button variant="dark" onClick={createCategory}>
          Add
        </Button>
      </div>
      <Table bordered hover responsive>
        <thead className="table-dark tracking-[2px] text-xl font-normal text-center">
          <tr>
            <th>Category Name</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>
                {category.createdAt
                  ? new Date(category.createdAt).toLocaleDateString()
                  : "N/A"}
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteCategory(category._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminCategories;
