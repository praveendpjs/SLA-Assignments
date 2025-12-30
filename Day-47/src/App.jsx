import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import all components
import Home from './Components/Home';
import About from './Components/About';
import LinkNavigation from './Components/LinkNavigation';
import User from './Components/User';
import Login from './Components/Login';
import NavigationMenu from './Components/NavigationMenu';
import Product from './Components/Product';
import Dashboard from './Components/Dashboard';
import DashboardOverview from './Components/DashboardOverview';
import DashboardProfile from './Components/DashboardProfile';
import DashboardSettings from './Components/DashboardSettings';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      
      <Routes>
        {/* Basic routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Link navigation example */}
        <Route path="/link-example" element={<LinkNavigation />} />
        
        {/* Dynamic route with URL parameter */}
        <Route path="/user/:id" element={<User />} />
        
        {/* Login page with useNavigate */}
        <Route path="/login" element={<Login />} />
        
        {/* Product page with URL params */}
        <Route path="/products/:productId" element={<Product />} />
        
        {/* Dashboard with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardOverview />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
        
        {/* 404 Page Not Found - catch all route (must be last) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
