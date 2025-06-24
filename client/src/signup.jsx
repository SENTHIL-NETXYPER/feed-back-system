import React from 'react';

const Signup = () => {
  return (
    <div style={styles.page}>
      {/* Inline style tag for hover effect */}
      <style>
        {`
          .signup-box button:hover {
            background-color: #1877F2;
            color: white;
          }
        `}
      </style>

      <div className="signup-box" style={styles.box}>
        <h2 style={styles.heading}>CREATE NEW USER</h2>

        <input
          type="text"
          placeholder="Username"
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <button style={styles.button}>Signup</button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  box: {
    backgroundColor: '#ffffff',
    padding: '30px 40px',
    borderRadius: '10px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    width: '320px',
    textAlign: 'center',
    border: '1px solid #ddd',

  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'uppercase',
    marginBottom: '25px'
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    outline: 'none',

  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'hover',
    transition: 'background-color 0.3s ease',
  },
};

export default Signup;
