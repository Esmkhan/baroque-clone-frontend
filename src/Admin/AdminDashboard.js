import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardStats();
  }, []);

  const getDashboardStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://baroque-clone-backend-production.up.railway.app/admin/dashboard/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setStats(response.data.stats);
    } catch (error) {
      console.log("Dashboard stats error:", error);
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

  return (
    <Container fluid className="py-5 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-medium mb-2 text-center tracking-[2px] font-serif">
        Admin Dashboard
      </h1>

      <p className="text-gray-500 mb-5 text-center tracking-[2px] font-serif">
        Welcome to your admin panel
      </p>

      <Row className="g-4">
        {/* Total Users */}
        <Col md={6} lg={3}>
          <Card className="border-3 shadow-2xl h-full">
            <Card.Body className="p-4 bg-purple-100 text-center">
              <p className="text-gray-500 mb-2">Total Users</p>

              <h2 className="text-3xl font-semibold">{stats.totalUsers}</h2>
            </Card.Body>
          </Card>
        </Col>

        {/* Total Products */}
        <Col md={6} lg={3} className="pt-[70px]">
          <Card className="border-3 shadow-2xl h-full ">
            <Card.Body className="p-4 bg-blue-50 text-center">
              <p className="text-gray-500 mb-2">Total Products</p>

              <h2 className="text-3xl font-semibold">{stats.totalProducts}</h2>
            </Card.Body>
          </Card>
        </Col>

        {/* Total Orders */}
        <Col md={6} lg={3} className="pt-[150px]">
          <Card className="border-3 shadow-2xl h-full">
            <Card.Body className="p-4 bg-red-50 text-center">
              <p className="text-gray-500 mb-2">Total Orders</p>

              <h2 className="text-3xl font-semibold">{stats.totalOrders}</h2>
            </Card.Body>
          </Card>
        </Col>

        {/* Total Revenue */}
        <Col md={6} lg={3} className="pt-[200px]">
          <Card className="border-3 shadow-2xl h-full">
            <Card.Body className="p-4 bg-gray-200 text-center">
              <p className="text-gray-500 mb-2">Total Revenue</p>

              <h2 className="text-3xl font-semibold">
                PKR {stats.totalRevenue.toLocaleString()}
              </h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
