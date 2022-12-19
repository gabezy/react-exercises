import React from "react";
import Radio from "./Radio";
import Result from "./Result";

const questions = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
  {
    pergunta: "Qual empresa desenvolveu o React?",
    options: ["Google", "Microsoft", "Facebook", "Apple"],
    resposta: "Facebook",
    id: "p5",
  },
];

let q;

function App() {
  const [answers, setAnswers] = React.useState(
    questions.reduce((acc, question) => {
      return {
        ...acc,
        [question.id]: "",
      };
    }, {})
  );
  const [points, setPoints] = React.useState(0);

  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  function onClick() {
    if (answers[q.id] === q.resposta) setPoints((point) => point + 1);
    else setPoints((point) => point);
    setCurrentQuestion((n) => n + 1);
  }

  q = questions[currentQuestion];

  React.useEffect(() => {
    q = questions[currentQuestion];
  }, [currentQuestion]);

  return (
    <>
      {currentQuestion < questions.length && (
        <form onSubmit={(e) => e.preventDefault()}>
          <Radio {...q} value={answers} setValue={setAnswers} />
          <button
            style={{ margin: "1rem 0" }}
            disabled={answers[q.id] ? false : true}
            onClick={onClick}
          >
            Próximo
          </button>
        </form>
      )}
      {currentQuestion === questions.length && (
        <Result points={points} questions={questions} userAnswers={answers} />
      )}
    </>
  );
}

export default App;
