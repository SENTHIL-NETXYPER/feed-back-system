import React, { useState } from 'react';

const allQuestions = [
  {
    step: 'The Syllabus Was Completed on Time?',
    options: ["Excellent", "Good", "Average", "Poor"]
  },
  {
    step: 'Assignments And Tests Were Helpful For Understanding The Subject',
    options: ["Excellent", "Good", "Average", "Poor"]
  },
  {
    step: 'Were Doubts And Questions Addressed Promptly?',
    options: ["Excellent", "Good", "Average", "Poor"]
  },
  {
    step: 'Were The Syllabus Explained Clearly and Effectively?',
    options: ["Excellent", "Good", "Average", "Poor"]
  }
];

// Dummy 12 box data


function MultipleChoiceQuestion() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const current = allQuestions[currentStep];
  const wordCount = comments.trim().split(/\s+/).filter(Boolean).length;

  const selectOption = (option) => {
    setAnswers({ ...answers, [currentStep]: [option] });
  };

  const next = () => {
    if (currentStep < allQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submit = () => {
    if (wordCount < 10) {
      alert("Please enter at least 10 words in the comment.");
      return;
    }

    const fullData = {
      answers,
      comments
    };

    console.log("Submitted Data:", fullData);
    setSubmitted(true);
  };

  // 👉 Display boxes after submission
  if (submitted) {
    return (
      <div style={{
        maxWidth: '900px',
        margin: '50px auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: '20px'
      }}>
        {boxData.map((box) => (
          <div key={box.id} style={{
            border: '2px solid black',
            padding: '10px',
            textAlign: 'center',
            borderRadius: '8px'
          }}>
            <p><strong>{box.name}</strong></p>
            <p>{box.year}</p>
            <button>View</button>
          </div>
        ))}
      </div>
    );
  }

  // 👉 Form before submission
  return (
    <div style={{
      fontFamily: 'sans-serif',
      padding: 20,
      maxWidth: 600,
      margin: '50px auto',
      border: '1px solid #ccc',
      borderRadius: 10,
      boxShadow: '0 0 15px #ddd'
    }}>
      <h2 style={{ textAlign: 'center' }}>{current.step}</h2>
      <p>Please choose one option:</p>

      {current.options.map((opt, i) => (
        <div key={i} style={{ marginBottom: 6, textAlign: 'left' }}>
          <label>
            <input
              type="radio"
              name={`question-${currentStep}`}
              checked={(answers[currentStep] || [])[0] === opt}
              onChange={() => selectOption(opt)}
            />{" "}
            {opt}
          </label>
        </div>
      ))}

      {currentStep === allQuestions.length - 1 && (
        <div style={{ marginTop: 20, textAlign: 'left' }}>
          <label><strong>Any Comments?</strong> (max 100 words)</label><br />
          <textarea
            value={comments}
            onChange={(e) => {
              const wc = e.target.value.trim().split(/\s+/).filter(Boolean).length;
              if (wc <= 10) setComments(e.target.value);
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

      <div style={{
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <button onClick={prev} disabled={currentStep === 0}>⬅️</button>
        {currentStep === allQuestions.length - 1 ? (
          <button onClick={submit} disabled={wordCount < 10}>Submit</button>
        ) : (
          <button onClick={next}>➡️</button>
        )}
      </div>
    </div>
  );
}

export default MultipleChoiceQuestion;
