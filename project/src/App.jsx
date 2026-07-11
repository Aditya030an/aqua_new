import React from "react";
import { Toaster } from "react-hot-toast";

// Components
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Floatingbutton from "./Component/Floatingbutton"; // ✅ ADD THIS
import Footer from "./Component/Footer";
import Login from "./Component/login";
import Forgetpassword from "./Component/Forgetpassword";
import Signup from "./Component/Signup";
import Product from "./Component/Product";
import AllBlogs from "./Component/Blogs";
import BlogDetails from "./Component/BlogDetails";
import BuyNow from "./Component/Buynow";
import Ordersuccessful from "./Component/Ordersuccessful";
import CancelPayment from "./Cancelpayment";
import Consultation from "./Component/Consultation";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./Component/AllProducts";
import MyOrders from "./Component/MyOrders";
import Cartpage from "./Component/Cartpage";


import UserProtectedRoute from "./Component/Protected/UserProtectedRoute";
import AdminProtectedRoute from "./Component/Protected/AdminProtectedRoute";
import Admin from "./Component/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <div className="flex flex-col min-h-screen w-full bg-white overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Routes (grows to fill space so the footer always stays at the bottom) */}
        <main className="flex-grow">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forgetpassword" element={<Forgetpassword />} />
          <Route path="/Cartpage" element={<Cartpage />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Consultation" element={<Consultation />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/all_products" element={<AllProducts />} />
          <Route path="/product_details/:id" element={<Product />} />
          {/* <Route path="/Product" element={<Product />} /> */}

          <Route path="/all_blogs" element={<AllBlogs />} />
          <Route path="/blog_details/:id" element={<BlogDetails />} />
          <Route path="/BuyNow" element={<BuyNow />} />

          <Route path="/order_successful" element={<Ordersuccessful />} />
          <Route path="/CancelPayment" element={<CancelPayment />} />

          {/* my order page */}
          <Route
            path="/my_order"
            element={
              <UserProtectedRoute>
                <MyOrders />
              </UserProtectedRoute>
            }
          />

          {/* ✅ ADMIN PROTECTED (example route) */}
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <Admin />
              </AdminProtectedRoute>
            }
          />
        </Routes>
        </main>

        {/* FLOATING BUTTONS (GLOBAL) */}
        <Floatingbutton />

        {/* FOOTER (GLOBAL) */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
