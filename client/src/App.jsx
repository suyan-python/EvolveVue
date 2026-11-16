import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// Public pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WholeTeam from "./pages/WholeTeam";
import DocInfo from "./bio/DocInfo";
import TeamFun from "./pages/TeamFun";
import Job from "./pages/Job";
import JobApplicationForm from "./pages/JobApplicationForm";
import EventsPreview from "./pages/EventsPreview";
import EventsGallery from "./pages/EventsGallery";

// Layout components
import Navbar from "./constant/Navbar";
import MobileNav from "./constant/Mobilenav";
import FooterBT from "./constant/FooterBt";
import Footer from "./constant/Footer";

// Admin pages
import AdminDashboard from "../admin/AdminDashboard";
import AdminLogin from "../admin/AdminLogin";

// Utilities
import ScrollToTop from "./ScrollToTop";

// Styles
import "./animation.css";
import "./index.css";

/* ----------------------------------
   PUBLIC LAYOUT
---------------------------------- */

function PublicLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <FooterBT />
      <Footer />
      <MobileNav />
    </>
  );
}

/* ----------------------------------
   ADMIN LAYOUT
---------------------------------- */

function AdminLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

/* ----------------------------------
   404 PAGE
---------------------------------- */

function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold yellowText">404</h1>

      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>

      <p className="text-gray-400 mt-3">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 rounded-lg yellow text-black font-semibold"
      >
        Back to Home
      </a>
    </main>
  );
}

/* ----------------------------------
   APP
---------------------------------- */

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Events */}
          <Route path="/events" element={<EventsPreview />} />
          <Route path="/events/:slug" element={<EventsGallery />} />

          {/* Careers */}
          <Route path="/application" element={<Job />} />
          <Route
            path="/application/apply/:jobId"
            element={<JobApplicationForm />}
          />

          {/* Team */}
          <Route path="/team" element={<WholeTeam />} />
          <Route path="/team/:doctorId" element={<DocInfo />} />
          <Route path="/teamfun" element={<TeamFun />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
