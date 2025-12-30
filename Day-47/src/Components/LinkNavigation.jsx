// LinkNavigation Component - Demonstrates Link component
import { Link } from 'react-router-dom';

function LinkNavigation() {
  return (
    <div>
      <h1>Link Navigation Example</h1>
      <p>Click the links below to navigate:</p>
      <nav>
        <Link to="/">Home</Link> | {' '}
        <Link to="/about">About</Link> | {' '}
        <Link to="/user/123">User 123</Link> | {' '}
        <Link to="/products/456">Product 456</Link>
      </nav>
      <p>
        The Link component prevents full page reloads and provides 
        client-side navigation.
      </p>
    </div>
  );
}

export default LinkNavigation;

