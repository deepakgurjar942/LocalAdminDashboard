import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LayoutProvider from "./components/layout/LayoutProvider";
import Dashboard from "./components/pages/Dashboard";
import Users from "./components/pages/Users";
import Settings from "./components/pages/Settings";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import ForgotPasswordPage from "./components/auth/ForgotPasswordPage";
import { useAuth } from "./components/context/AuthProvider";

function App() {
  return (
    <Router>
      <LayoutProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Protected routes */}
          <Route element={<PrivateRoutes />}>
            <Route element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Route>

          {/* Redirect to login by default */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </LayoutProvider>
    </Router>
  );
}

// PrivateRoutes component to protect routes
function PrivateRoutes() {
  const { currentUser } = useAuth(); // Get auth state

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default App;