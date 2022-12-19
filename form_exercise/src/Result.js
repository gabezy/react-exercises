import React from "react";

function Result({ points, questions, userAnswers }) {
  return (
    <fieldset
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        border: "2px solid #eee",
        position: "relative",
      }}
    >
      <legend style={{ textAlign: "center" }}>Resultado</legend>
      <p style={{ textAlign: "center" }}>
        Você acertou: {points} de {questions.length}
      </p>
      <ul style={{ listStyle: "none" }}>
        {Object.keys(userAnswers).map((k, i) => {
          const isCorrect = questions[i].resposta === userAnswers[k];
          return (
            <li key={i}>
              {" "}
              {i + 1}: {userAnswers[k]}{" "}
              {isCorrect ? (
                <span style={{ color: "blue" }}>✓</span>
              ) : (
                <span style={{ color: "red" }}>✕</span>
              )}
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

export default Result;
