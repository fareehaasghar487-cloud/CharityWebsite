import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, isLoading } = useSelector((state) => state.auth);

  // 🔄 Wait until auth is restored
  if (isLoading) return <p>Loading...</p>;

  // ❌ Not logged in
  if (!user) return <Navigate to="/login" replace />;

  // ❌ Admin-only check
  if (adminOnly && user.role.toLowerCase() !== "admin") {
    // Regular users trying to access admin dashboard
    return <Navigate to="/" replace />;
  }

  // ✅ User is allowed
  return children;
};

export default ProtectedRoute;
