import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const allQuestions = [
  {
    step: 'The Syllabus Was Completed on Time?',
    options: ['Excellent', 'Good', 'Average', 'Poor']
  },
  {
    step: 'Assignments And Tests Were Helpful For Understanding The Subject',
    options: ['Excellent', 'Good', 'Average', 'Poor']
  },
  {
    step: 'Were Doubts And Questions Addressed Promptly?',
    options: ['Excellent', 'Good', 'Average', 'Poor']
  },
  {
    step: 'Were The Syllabus Explained Clearly and Effectively?',
    options: ['Excellent', 'Good', 'Average', 'Poor']
  }
];

function HeaderWithOption() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const current = allQuestions[currentStep];
  const wordCount = comments.trim().split(/\s+/).filter(Boolean).length;

  const selectOption = (option) => {
    setAnswers({ ...answers, [currentStep]: [option] });
    setWarningMessage('');
  };

  const prev = () => {
    if (currentStep > 0) {
      setWarningMessage('');
      setCurrentStep(currentStep - 1);
    }
  };

  const next = () => {
    if (!answers[currentStep]) {
      setWarningMessage('⚠️ Please select an option before continuing.');
      return;
    }
    setWarningMessage('');
    if (currentStep < allQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const submit = () => {
    if (!answers[currentStep]) {
      setWarningMessage('⚠️ Please select an option before submitting.');
      return;
    }

    if (wordCount < 10) {
      setWarningMessage('⚠️ Please enter at least 10 words in the comment.');
      return;
    }

    const fullData = { answers, comments };
    console.log('Submitted Data:', fullData);
    setSubmitted(true);
  };

  const styles = {
    page: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    },
    fixedHeader: {
      padding: '30px 40px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      marginBottom: '40px',
      width: '100%',
      maxWidth: '500px'
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#222'
    },
    subtitle: {
      fontSize: '18px',
      fontStyle: 'italic',
      color: '#1877f2'
    },
    info: {
      fontSize: '16px',
      color: '#444',
      fontWeight: 'bold',
      marginTop: '10px'
    },
    arrowContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
      padding: '20px',
      position: 'relative'
    },
    questionBox: {
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 0 15px rgba(0,0,0,0.15)',
      width: '500px'
    },
    alertBox: {
      position: 'absolute',
      bottom: '-70px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '600px'
    },
    nextBtn: {
      marginTop: '40px',
      padding: '10px 25px',
      fontSize: '16px',
      backgroundColor: '#1877f2',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer'
    }
  };

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.fixedHeader}>
          <h1 style={styles.title}>STUDENT FEEDBACK SYSTEM</h1>
          <h2 style={styles.subtitle}>YOUR OPTIONS MATTER TO US</h2>
          <p style={styles.info}>23AD096 MATH</p>
        </div>
        <h2 style={{ textAlign: 'center', marginTop: '40px' }}>🎉 Thank you for submitting your feedback!</h2>
        <button style={styles.nextBtn}>Next</button>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.fixedHeader}>
        <h1 style={styles.title}>STUDENT FEEDBACK SYSTEM</h1>
        <h2 style={styles.subtitle}>YOUR OPTIONS MATTER TO US</h2>
        <p style={styles.info}>23AD096 MATH</p>
      </div>

      <div style={styles.arrowContainer}>
        <ChevronLeftIcon
          onClick={prev}
          style={{
            fontSize: '40px',
            color: currentStep === 0 ? '#ccc' : '#444',
            cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
          }}
        />

        <div style={styles.questionBox}>
          <h2 style={{ fontSize: '18px' }}>{current.step}</h2>
          <p style={{ fontSize: '16px' }}>Please choose one option:</p>
          {current.options.map((opt, i) => (
            <div key={i} style={{ marginBottom: 6 }}>
              <label style={{ fontSize: '16px' }}>
                <input
                  type="radio"
                  name={`question-${currentStep}`}
                  checked={(answers[currentStep] || [])[0] === opt}
                  onChange={() => selectOption(opt)}
                />{' '}
                {opt}
              </label>
            </div>
          ))}

          {currentStep === allQuestions.length - 1 && (
            <div style={{ marginTop: 20 }}>
              <label style={{ fontSize: '16px' }}>
                <strong>Any Comments?</strong> (min. 10 words)
              </label>
              <br />
              <textarea
                value={comments}
                onChange={(e) => {
                  const wc = e.target.value.trim().split(/\s+/).filter(Boolean).length;
                  if (wc <= 100) setComments(e.target.value);
                }}
                rows={4}
                style={{ width: '100%', marginTop: 8 }}
                placeholder="Type your comments here..."
              />
              <small style={{ color: wordCount < 10 ? 'red' : '#888' }}>
                {wordCount} / 10 words (min. 10 required)
              </small>
            </div>
          )}

          {currentStep === allQuestions.length - 1 && (
            <button
              onClick={submit}
              disabled={wordCount < 10 || !answers[currentStep]}
              style={{
                marginTop: 20,
                padding: '10px 20px',
                backgroundColor: wordCount < 10 || !answers[currentStep] ? '#ccc' : '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                cursor: wordCount < 10 || !answers[currentStep] ? 'not-allowed' : 'pointer'
              }}
            >
              Submit
            </button>
          )}
        </div>

        <ChevronRightIcon
          onClick={next}
          style={{
            fontSize: '40px',
            color: currentStep === allQuestions.length - 1 ? '#ccc' : '#444',
            cursor: currentStep === allQuestions.length - 1 ? 'not-allowed' : 'pointer'
          }}
        />

        {warningMessage && (
          <div style={styles.alertBox}>
            <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
              {warningMessage}
              <button type="button" className="btn-close" onClick={() => setWarningMessage('')}></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderWithOption;