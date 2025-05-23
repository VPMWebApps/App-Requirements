import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VolunteerEvents from "./pages/VolunteerEvents";
import ResearchPrograms from "./pages/ResearchPrograms";
import CSRRequirement from "./pages/CSRRequirement";

function App() {
  return (
    <Router>
      <div className="bg-pink-100 min-h-screen">
        <header className="bg-white h-28 flex flex-col justify-between items-center  shadow-md">
          <h1 className="text-xl font-bold text-center w-full py-5">VPM TRUST</h1>
          <div className="flex gap-8">
            <button className="text-pink-600 font-semibold hover:underline">
              <Link to="/">VOLUNTEERING EVENT</Link>
            </button>
            <button className="text-pink-600 font-semibold hover:underline">
              <Link to="/research">DONATE FOR RESEARCH</Link>
            </button>
            <button className="text-pink-600 font-semibold hover:underline">
              <Link to="/csr-requirement">CSR REQUIREMENT</Link>
            </button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<VolunteerEvents />} />
          <Route path="/research" element={<ResearchPrograms />} />
          <Route path="/csr-requirement" element={<CSRRequirement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
