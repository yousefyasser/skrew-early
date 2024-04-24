import Dashboard from "../Utils/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AdminDashboard = () => {
  const content = [
    { text: "Admin item1", icon: <DashboardIcon /> },
    { text: "Admin item2", icon: <ShoppingCartIcon /> },
  ];

  return <Dashboard content={content} />;
};

export default AdminDashboard;
