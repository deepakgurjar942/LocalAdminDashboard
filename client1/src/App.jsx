import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
