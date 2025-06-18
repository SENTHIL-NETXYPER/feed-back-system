import React from 'react';

const boxData = [
  { id: 1, name: "John", year: 2020 },
  { id: 2, name: "Alice", year: 2021 },
  { id: 3, name: "Bob", year: 2022 },
  { id: 4, name: "Sara", year: 2023 },
  { id: 5, name: "Raj", year: 2024 },
  { id: 6, name: "Lily", year: 2022 },
  { id: 7, name: "David", year: 2021 },
  { id: 8, name: "Priya", year: 2020 },
  { id: 9, name: "Kumar", year: 2023 },
  { id: 10, name: "Emma", year: 2022 },
  { id: 11, name: "Amit", year: 2024 },
  { id: 12, name: "Maya", year: 2021 }
];

function BoxGrid() {
  return (
    <div style={styles.container}>
      {boxData.map((item) => (
        <div key={item.id} style={styles.box}>
          <div><strong>{item.name}</strong></div>
          <div>{item.year}</div>
          <button style={styles.button}>View</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '15px',
    padding: '20px',
    justifyItems: 'center'
  },
  box: {
    border: '2px solid black',
    width: '100px',
    height: '100px',
    borderRadius: '5px',
    textAlign: 'center',
    padding: '8px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '4px',
    fontSize: '12px',
    cursor: 'pointer'
  }
};

export default BoxGrid;
