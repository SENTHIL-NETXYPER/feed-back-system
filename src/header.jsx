import React from 'react';

function Header() {
  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor:"white",
      color: 'black',
      boxShadow: ' rgba(42, 206, 42, 0.2)',
      borderBottomLeftRadius: '12px',
      borderBottomRightRadius: '12px'
    },
    title: {
      fontSize: '36px',
      margin: '0',
      fontWeight: '0',
      letterSpacing: '1.4'
    },
    subtitle: {
      fontSize: '20px',
      marginTop: '10px',
      fontStyle: 'italic',
      color: '#1877f2'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title} >STUDENT FEEDBACK SYSTEM</h1>
      <h2 style={styles.subtitle}>YOUR OPTIONS MATTER TO US</h2>
    </div>
  );
}

export default Header;
