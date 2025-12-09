// Task 5: Create a Card with children and display anything inside it

function Card({ children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      {children}
    </div>
  );
}

export default Card;

