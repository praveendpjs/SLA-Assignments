// Task 10: Build a multi-component page: Header, Content, Footer

function Header() {
  return (
    <header style={{ 
      backgroundColor: '#333', 
      color: 'white', 
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>Header</h1>
    </header>
  );
}

function Content() {
  return (
    <main style={{ 
      padding: '20px',
      flex: 1
    }}>
      <h2>Content Area</h2>
      <p>This is the main content of the page.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#333', 
      color: 'white', 
      padding: '20px',
      textAlign: 'center'
    }}>
      <p>Footer</p>
    </footer>
  );
}

function MultiComponentPage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default MultiComponentPage;

