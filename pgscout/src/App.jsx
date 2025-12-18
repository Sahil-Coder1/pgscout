import Home from "./pages/Home";
import SearchPage from "./pages/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search=:searchTerm" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}
