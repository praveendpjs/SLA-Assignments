// Task 9: Create a Layout component using children

function Layout({ children }) {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {children}
    </div>
  );
}

export default Layout;

