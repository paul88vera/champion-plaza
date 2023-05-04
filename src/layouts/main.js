import Navbar from "../components/nav/navbar";
import Footer from "../components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import News from "../pages/news";
import Error from "../pages/error";

// NOTE: Below is where the pages are being linked to their patthways. You can add more pages here or you can delete pages here as well.

export default function Layout() {
  return (
    <BrowserRouter>
      <div className="relative flex flex-col overflow-x-hidden font-sans">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/news" element={<News title="News" />} />
          <Route path="/*" element={<Error title="Error" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
