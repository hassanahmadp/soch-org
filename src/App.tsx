import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import About from "./pages/About";
import Business from "./pages/Business";
import Careers from "./pages/Careers";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NewsRoom from "./pages/NewsRoom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsroom" element={<NewsRoom />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
