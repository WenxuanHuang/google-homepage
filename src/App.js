import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Store from "./pages/Store";
import Images from "./pages/Images";
import Gmail from "./pages/Gmail";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/images" element={<Images />} />
          <Route path="/gmail" element={<Gmail />} />
        </Routes>
    </>
  );
}

export default App;
