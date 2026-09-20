import { Navigate } from "react-router-dom";

const MOCK_USER = {
  id: "1",
  name: "Jane Doe",
  role: "job_seeker",
  isLoggedIn: true, // flip to false to test the redirect
};

export default function AuthGuard({ children }) {
  const user = MOCK_USER; // later: replace with real auth context/hook

  if (!user.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}