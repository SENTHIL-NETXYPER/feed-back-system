import React, { useState } from 'react';
import Modal from 'react-modal';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function FloatingCardPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);

  const boxData = [
    { id: '23ADC096', subject: 'Python', chartData: [40, 30, 20, 5, 5] },
    { id: '23ADC097', subject: 'Maths', chartData: [20, 40, 25, 10, 5] },
    { id: '23ADS098', subject: 'English', chartData: [35, 25, 30, 5, 5] },
    { id: '23ADE099', subject: 'AI', chartData: [50, 20, 10, 10, 10] },
    { id: '23ADW100', subject: 'ML', chartData: [25, 30, 25, 10, 10] },
    { id: '23ADR101', subject: 'Java', chartData: [30, 30, 20, 10, 10] },
    { id: '23ADG102', subject: 'DSA', chartData: [45, 25, 15, 10, 5] }
  ];

  const openModal = (box) => {
    setSelectedBox(box);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBox(null);
  };

  const chartData = {
    labels: ['Excellent', 'Good', 'Average', 'Poor', 'N/A'],
    datasets: [
      {
        data: selectedBox?.chartData || [0, 0, 0, 0, 0],
        backgroundColor: ['#00bcd4', '#2196f3', '#ffc107', '#607d8b', '#8bc34a']
      }
    ]
  };

  const chartOptions = {
    plugins: {
      legend: { display: false },
      datalabels: {
        color: '#000',
        font: { weight: 'bold', size: 14 },
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          return ((value / total) * 100).toFixed(0) + '%';
        }
      }
    }
  };

  const styles = {
    pageWrapper: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#f3f3f3',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px'
    },
    headerBox: {
      width: '100%',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 20px rgba(0, 128, 0, 0.2)',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    buttonBase: {
      padding: '10px 20px',
      backgroundColor: '#fff',
      border: '1.5px solid gray',
      color: 'black',
      fontWeight: 'bold',
      borderRadius: '20px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    viewButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#1877f2',
      color: '#fff',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px', // Slightly rounded corners (circle touch)
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    },
    cardsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px'
    },
    card: {
      width: '200px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      borderRadius: '10px',
      textAlign: 'center',
      animation: 'floatCard 6s ease-in-out infinite',
      position: 'relative'
    },
    modalStyle: {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        borderRadius: '10px',
        width: '350px',
        textAlign: 'center',
        boxShadow: '0 0 20px rgba(0,0,0,0.2)'
      }
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <style>
        {`@keyframes floatCard {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }`}
      </style>

      <div style={styles.headerBox}>
        <h2 style={{ margin: 0 }}>Subjects Feedback Dashboard</h2>
        <button style={styles.buttonBase}>CREATE ID</button>
      </div>

      <div style={styles.cardsContainer}>
        {boxData.map((box, idx) => (
          <div key={idx} style={styles.card}>
            <div>{box.id}</div>
            <div>{box.subject}</div>
            <button
              style={{ ...styles.viewButton, marginTop: '10px' }}
              onClick={() => openModal(box)}
              onMouseOver={(e) => e.target.style.backgroundColor = '#145dbf'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#1877f2'}
            >
              View
            </button>
          </div>
        ))}
      </div>

      <button style={styles.buttonBase}>CREATE SUBJECT</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={styles.modalStyle}
        ariaHideApp={false}
      >
        <h2>{selectedBox?.subject} Details</h2>
        <p>ID: {selectedBox?.id}</p>
        <Pie data={chartData} options={chartOptions} />
        <button
          style={{ ...styles.buttonBase, marginTop: '20px', padding: '8px 16px' }}
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default FloatingCardPage;
