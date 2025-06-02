import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutProvider from "./components/layout/LayoutProvider";
import Dashboard from "./components/pages/Dashboard";
import Users from "./components/pages/Users";
import Settings from "./components/pages/Settings";
import LoginForm from "./components/auth/LoginForm"
import RegisterForm from "./components/auth/RegisterForm"
function App() {          
  return (
      <Router>
      <LayoutProvider>
        <Routes>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          {/* Main layout route that wraps all admin pages */}
          {/* <Route element={<Layout />}>
            <Route index element={<Dashboard />} /> 
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Route> */}

        </Routes>
      </LayoutProvider>
    </Router>
  )
}

export default App;
