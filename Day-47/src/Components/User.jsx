// User Component - Dynamic route using useParams
import { useParams } from 'react-router-dom';

function User() {
  // useParams hook extracts URL parameters
  const { id } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
      <p>This is a dynamic route example.</p>
      <p>The route pattern is /user/:id</p>
      <p>Try changing the ID in the URL to see different users.</p>
    </div>
  );
}

export default User;

