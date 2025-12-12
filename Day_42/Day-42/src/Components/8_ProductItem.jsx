// Task 8: Build a ProductItem component showing title + price

function ProductItem({ title, price }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '15px', 
      margin: '10px',
      borderRadius: '4px'
    }}>
      <h4>{title}</h4>
      <p style={{ fontWeight: 'bold', color: 'green' }}>${price}</p>
    </div>
  );
}

export default ProductItem;


