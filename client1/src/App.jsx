import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LayoutProvider from "./components/layout/LayoutProvider";
import Dashboard from "./components/pages/Dashboard";
import Admin from "./components/Admin";

function App() {
  return (
 <Router>
      <LayoutProvider> {/* This should wrap everything that needs the context */}
        <Layout>
      <Admin/>
        </Layout>
      </LayoutProvider>
    </Router>
  )
}

export default App;
