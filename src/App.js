import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Home from "./components/Home";
import Register from "./components/Register";
import Terms from "./components/Terms";
import Newsletter from "./components/Newsletter";
import Login from "./components/LogIn";


function App() {
  return (
    <>    
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/:coinId" element={<CoinDetails />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
