import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import Mobile from "./pages/Login/Mobile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mobile" element={<Mobile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Hero />
    <Chart />
    <div className="App">
      <div className="bg-blue-500 p-4">
        <p className="text-white">Hello, Tailwind CSS in React!</p>
      </div>
    </div> */}
    </>
  );
}

export default App;
