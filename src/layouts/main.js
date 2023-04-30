import Navbar from "../components/nav/navbar";
import Footer from "../components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import News from "../pages/news";
import Admin from "../pages/admin";

export default function Layout() {
  return (
    <BrowserRouter>
      <div className="relative flex flex-col overflow-x-hidden font-sans">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/news" element={<News title="News" />} />
          <Route
            path="/admin"
            element={<Admin title="Administrator Login" />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
