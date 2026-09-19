import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Category from "./Pages/Category";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Wishlist from "./Pages/Wishlist";
import Register from "./Pages/Register";
import Account from "./Pages/Account";
import AdminProducts from "./Admin/AdminProducts";
import AdminRegister from "./Admin/AdminRegister";
import AdminLogin from "./Admin/AdminLogin";
import EditProduct from "./Admin/EditProduct";
import AddProduct from "./Admin/AddProduct";
import AdminLayout from "./Admin/AdminLayout";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminOrders from "./Admin/AdminOrders";
import AdminUsers from "./Admin/AdminUsers";
import AdminCategories from "./Admin/AdminCategories";
import Footer from "./Components/Footer";
import WhoWeAre from "./Footer-Components/WhoWeAre";
import OurResponsibility from "./Footer-Components/OurResponsibility";
import ServiceWeProvide from "./Footer-Components/ServiceWeProvide";
import Careers from "./Footer-Components/Careers";
import StoreLocation from "./Footer-Components/StoreLocation";
import ContactUs from "./Footer-Components/ContactUs";
import DispatchTimeline from "./Footer-Components/DispatchTimeline";
import ExchangeInformation from "./Footer-Components/ExchangeInformation";
import PrivacyPolicy from "./Footer-Components/PrivacyPolicy";
import RefundPolicy from "./Footer-Components/RefundPolicy";
import ShippingPolicy from "./Footer-Components/ShippingPolicy";
import TermOfService from "./Footer-Components/TermOfService";
import Legal from "./Footer-Components/Legal";
import ProductListing from "./Components/ProductListing";
import ProductDetails from "./Pages/ProductDetails";
import MyOrders from "./Pages/MyOrders";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const isAdminPage = window.location.pathname.startsWith("/admin");

  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <ScrollToTop />

          {!isAdminPage && <Header />}
          {!isAdminPage && <Navigation />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/account" element={<Account />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/orders/:id" element={<MyOrders />} />

            {/* admin routes */}
            <Route path="/admin/editProduct" element={<EditProduct />} />
            <Route path="/admin/addProduct" element={<AddProduct />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/categories" element={<AdminCategories />} />
            </Route>

            {/* Footer routes */}
            <Route path="/whoWeAre" element={<WhoWeAre />} />
            <Route path="/ourResponsibility" element={<OurResponsibility />} />
            <Route path="/serviceWeProvide" element={<ServiceWeProvide />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/storeLocations" element={<StoreLocation />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/dispatchTimeline" element={<DispatchTimeline />} />
            <Route path="/exchangeInformation" element={<ExchangeInformation />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/refundPolicy" element={<RefundPolicy />} />
            <Route path="/shippingPolicy" element={<ShippingPolicy />} />
            <Route path="/termOfService" element={<TermOfService />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
          {!isAdminPage && <Cart />}
          {!isAdminPage && <Footer />}
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
