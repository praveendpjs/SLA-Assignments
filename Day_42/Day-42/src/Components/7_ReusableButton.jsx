// Task 7: Make a reusable Button (color, size, text props)

function ReusableButton({ color, size, text }) {
  const buttonStyle = {
    backgroundColor: color || 'blue',
    color: 'white',
    padding: size === 'small' ? '8px 16px' : size === 'large' ? '16px 32px' : '12px 24px',
    fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return <button style={buttonStyle}>{text}</button>;
}

export default ReusableButton;


