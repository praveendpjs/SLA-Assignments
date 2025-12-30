// Task 9: Cart item count logic

import { useSelector, useDispatch } from 'react-redux';

function CartItemCount() {
  // Get cart item count from Redux store
  const cartCount = useSelector((state) => state.cart);
  
  // Get dispatch function
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch({ type: 'ADD_TO_CART' });
  };

  const removeItem = () => {
    if (cartCount > 0) {
      dispatch({ type: 'REMOVE_FROM_CART' });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const addMultiple = (quantity) => {
    dispatch({ type: 'ADD_MULTIPLE', payload: quantity });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Cart Item Count using Redux</h2>
      
      <div style={{ 
        background: '#f8f9fa', 
        padding: '30px', 
        borderRadius: '10px',
        margin: '20px 0',
        border: '2px solid #dee2e6'
      }}>
        <div style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          color: '#007bff',
          marginBottom: '10px'
        }}>
          🛒 {cartCount}
        </div>

        <div style={{ 
          fontSize: '18px',
          marginBottom: '30px',
          color: cartCount === 0 ? '#6c757d' : '#28a745'
        }}>
          {cartCount === 0 
            ? 'Your cart is empty' 
            : cartCount === 1 
            ? '1 item in cart' 
            : `${cartCount} items in cart`}
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '15px' }}>
          <button 
            onClick={removeItem}
            disabled={cartCount === 0}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: cartCount === 0 ? '#6c757d' : '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: cartCount === 0 ? 'not-allowed' : 'pointer',
              opacity: cartCount === 0 ? 0.6 : 1
            }}
          >
            Remove Item (-)
          </button>

          <button 
            onClick={addItem}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Add Item (+)
          </button>
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '15px' }}>
          <button 
            onClick={() => addMultiple(3)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Add 3 Items
          </button>

          <button 
            onClick={clearCart}
            disabled={cartCount === 0}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: cartCount === 0 ? '#6c757d' : '#ffc107',
              color: cartCount === 0 ? '#ffffff' : '#000000',
              border: 'none',
              borderRadius: '5px',
              cursor: cartCount === 0 ? 'not-allowed' : 'pointer',
              opacity: cartCount === 0 ? 0.6 : 1
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div style={{ 
        textAlign: 'left', 
        marginTop: '30px', 
        padding: '15px', 
        background: '#e9ecef', 
        borderRadius: '5px' 
      }}>
        <h3>Redux Implementation:</h3>
        <pre style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`// Reducer
function cartReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state + 1;
    case 'REMOVE_FROM_CART':
      return state > 0 ? state - 1 : 0;
    case 'ADD_MULTIPLE':
      return state + action.payload;
    case 'CLEAR_CART':
      return 0;
    default:
      return state;
  }
}

// Component
const cartCount = useSelector(state => state.cart);
dispatch({ type: 'ADD_TO_CART' });
dispatch({ type: 'REMOVE_FROM_CART' });
dispatch({ type: 'ADD_MULTIPLE', payload: 3 });
dispatch({ type: 'CLEAR_CART' });`}
        </pre>
      </div>
    </div>
  );
}

export default CartItemCount;

