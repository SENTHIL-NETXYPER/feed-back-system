import React, { useState } from 'react';

const LoginBox = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const styles = {
    loginbox: {
      width: '400px',
      padding: '30px 20px',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease-in-out',
    },
    tabContainer: {
      display: 'flex',
      marginBottom: '25px',
      borderRadius: '12px',
      overflow: 'hidden',
    },
    tab: {
      flex: 1,
      textAlign: 'center',
      padding: '12px 0',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      backgroundColor: '#f0f0f0',
      transition: '0.3s ease',
    },
    activeTab: {
      backgroundColor: '#1877F2',
      color: 'white',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '12px',
      border: '1.5px solid #ccc',
      marginBottom: '15px',
      fontSize: '15px',
      outline: 'none',
      transition: '0.2s',
    },
    button: {
      width: '100%',
      padding: '12px',
      borderRadius: '12px',
      border: 'none',
      backgroundColor: '#1877F2',
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#145dcc',
    },
    form: {
      textAlign: 'center',
    }
  };

  return (
    <div style={styles.loginbox}>
      <div style={styles.tabContainer}>
        <div
          style={{
            ...styles.tab,
            ...(selectedIndex === 1 ? styles.activeTab : {}),
          }}
          onClick={() => setSelectedIndex(1)}
        >
          admin
        </div>
        <div
          style={{
            ...styles.tab,
            ...(selectedIndex === 0 ? styles.activeTab : {}),
          }}
          onClick={() => setSelectedIndex(0)}
        >
          student
        </div>
      </div>

      {selectedIndex === 0 && (
        <form style={styles.form} key="student">
          <input type="text" placeholder="Roll No" style={styles.input} />
          <input type="text" placeholder="Department" style={styles.input} />
          <input type="text" placeholder="Semester" style={styles.input} />
          <input type="text" placeholder="Year" style={styles.input} />
          <input
            type="button"
            value="Login"
            style={{ ...styles.button, ...(hover ? styles.buttonHover : {}) }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          />
        </form>
      )}

      {selectedIndex === 1 && (
        <form style={styles.form} key="admin">
          <input type="text" placeholder="Username" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <input
            type="button"
            value="Login"
            style={{ ...styles.button, ...(hover ? styles.buttonHover : {}) }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          />
        </form>
      )}
    </div>
  );
};

const TitleWithLogin = () => {
  const styles = {
    page: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Segoe UI, sans-serif',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '50px',
    },
    headingSection: {
      textAlign: 'center',
    },
    collegeName: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '8px',
    },
    subHeading: {
      color: '#1877F2',
      fontSize: '22px',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.contentWrapper}>
        {/* Heading */}
        <div style={styles.headingSection}>
          <h1 style={styles.collegeName}>Muthayammal Engineering College</h1>
          <h2 style={styles.subHeading}>Feedback Form</h2>
        </div>

        {/* Login */}
        <LoginBox />
      </div>
    </div>
  );
};

export default TitleWithLogin;
