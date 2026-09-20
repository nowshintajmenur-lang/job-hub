import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthGuard from "./components/guards/AuthGuard";
import Layout from "./components/Layout";
import Dashboard from "./pages/jobseeker/Dashboard";
import Profile from "./pages/jobseeker/Profile";
import MyApplications from "./pages/jobseeker/MyApplications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AuthGuard>
              <Layout />
            </AuthGuard>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-applications" element={<MyApplications />} />
        </Route>

        {/* Person 1's public routes (/, /login, /register, etc.) go here too */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;