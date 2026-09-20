import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Spinner } from "react-bootstrap";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("https://baroque-clone-backend-production.up.railway.app/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("USERS:", response.data.users);

      setUsers(response.data.users);
    } catch (error) {
      console.log("Users error:", error);
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

  //delete user
  const deleteUser = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`https://baroque-clone-backend-production.up.railway.app/admin/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(users.filter((user) => user._id !== userId));

      alert("User deleted successfully");
    } catch (error) {
      console.log("Delete user error:", error);
      alert("Failed to delete user");
    }
  };

  return (
    <Container fluid className="py-5 px-4">
      <h1 className="text-3xl font-semibold mb-2 text-center tracking-[2px] py-3">
        Admin Users
      </h1>

      <p className="text-gray-500 mb-4 text-center">
        Total Users: {users.length}
      </p>

      <Table bordered hover responsive>
        <thead className="table-dark tracking-[2px] text-xl font-normal text-center">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>
                {user.role !== "admin" && (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminUsers;
