// NavigationMenu Component - Demonstrates NavLink with active state
import { NavLink } from 'react-router-dom';

function NavigationMenu() {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>Navigation Menu</h2>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding: 0 }}>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              textDecoration: 'none',
              padding: '10px 15px',
              backgroundColor: isActive ? '#007bff' : 'transparent',
              color: isActive ? 'white' : 'black',
              borderRadius: '5px'
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"
            style={({ isActive }) => ({
              textDecoration: 'none',
              padding: '10px 15px',
              backgroundColor: isActive ? '#007bff' : 'transparent',
              color: isActive ? 'white' : 'black',
              borderRadius: '5px'
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login"
            style={({ isActive }) => ({
              textDecoration: 'none',
              padding: '10px 15px',
              backgroundColor: isActive ? '#007bff' : 'transparent',
              color: isActive ? 'white' : 'black',
              borderRadius: '5px'
            })}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/dashboard"
            style={({ isActive }) => ({
              textDecoration: 'none',
              padding: '10px 15px',
              backgroundColor: isActive ? '#007bff' : 'transparent',
              color: isActive ? 'white' : 'black',
              borderRadius: '5px'
            })}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
      <p>
        NavLink automatically applies active styles when the route matches.
        Notice how the active link is highlighted in blue.
      </p>
    </nav>
  );
}

export default NavigationMenu;

