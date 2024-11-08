import React, { useState } from "react";
import QuizBox from "../../components/QuizBox";
const quizes = [
  {
    questions: "What is the main goal of SDG for water development?",
    option: {
      op1: "Finding issues of water pollution",
      op2: "Solve issues of water pollution",
      op3: "Find and solve the issues of water pollution",
      op4: "None of them",
    },
    answers: "Find and solve the issues of water pollution",
  },
  {
    questions: "What is the main goal of SDG for water development?",
    option: {
      op1: "Create new river for pure water",
      op2: "Solve issues of water pollution",
      op3: "Find and solve the issues of water pollution",
      op4: "None of them",
    },
    answers: "None of them",
  },
];
function QuizPage() {
  const [markStack, setStack] = useState([0, 0, 0, 0, 0]);
  const [selectedAnswers, setAnswerStack] = useState(["", "", "", "", ""]);
  const [pageNo, setPage] = useState(0);
  const handleMarking = (qid, ans, selectedOpt) => {
    console.log(ans, selectedOpt);
    setStack((pre) => {
      const newMarkList = [...pre];

      return newMarkList.map((e, i) =>
        i !== qid ? e : ans === selectedOpt ? 1 : 0
      );
    });

    setAnswerStack((pre) => {
      const newMarkList = [...pre];

      return newMarkList.map((e, i) => (i !== qid ? e : selectedOpt));
    });
  };

  return (
    <div className="bg-slate-900 p-5 xl:px-20 min-h-screen">
      <header>
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-cyan-200 pt-5">
          Take a quiz on Water Environmental Development
        </h1>
      </header>

      <div className="my-5 max-w-md mx-auto">
        <div>
          {quizes.map(
            (q, qid) =>
              qid === pageNo && (
                <div key={qid}>
                  <QuizBox
                    answer={q.answers}
                    qid={qid}
                    options={q.option}
                    question={q.questions}
                    handleMarking={handleMarking}
                    selectedAnswer={selectedAnswers[qid]}
                  />
                  <div>
                    <button
                      className="text-white bg-green-600 hover:bg-green-500 rounded-full w-fit px-10 py-2 my-10"
                      type="button"
                      onClick={() =>
                        setPage((pre) =>
                          pre < quizes.length - 1 ? pre + 1 : quizes.length - 1
                        )
                      }
                    >
                      Next
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
