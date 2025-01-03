import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./work";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
