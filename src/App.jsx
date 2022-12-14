import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import { Contact } from "./pages/contact/Contact";
import { Home } from "./pages/home/Home";
import { WorkDetail } from "./pages/workDetail/WorkDetail";
import { Works } from "./pages/works/Works";

function App() {
  return (
    <div className="cont container-fluid">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<WorkDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route index element={<Home />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
