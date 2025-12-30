// Product Component - Using URL params with useParams
import { useParams } from 'react-router-dom';

function Product() {
  // Extract productId from URL parameters
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
      <p>This page demonstrates how to extract URL parameters.</p>
      <p>The route pattern is /products/:productId</p>
      <p>Try visiting /products/123 or /products/456 to see different products.</p>
    </div>
  );
}

export default Product;

