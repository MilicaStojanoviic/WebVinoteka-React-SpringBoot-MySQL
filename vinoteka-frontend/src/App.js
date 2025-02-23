import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SopPage from "./pages/SopPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sop" element={<SopPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
