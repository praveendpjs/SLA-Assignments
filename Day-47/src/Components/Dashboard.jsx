// Dashboard Component - Demonstrates nested routes
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the main Dashboard page with nested routes.</p>
      
      <nav style={{ margin: '20px 0', padding: '10px', backgroundColor: '#e0e0e0' }}>
        <h3>Dashboard Sections:</h3>
        <Link to="/dashboard" style={{ marginRight: '10px' }}>Overview</Link>
        <Link to="/dashboard/profile" style={{ marginRight: '10px' }}>Profile</Link>
        <Link to="/dashboard/settings" style={{ marginRight: '10px' }}>Settings</Link>
      </nav>

      {/* Outlet renders child routes */}
      <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;

