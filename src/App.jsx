import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Error404 from "./pages/Error404.jsx";
import Error500 from "./pages/Error500.jsx";

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/404">404 Error</Link></li>
        <li><Link to="/500">500 Error</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/500" element={<Error500 />} />
      </Routes>
    </Router>
  );
}

export default App;