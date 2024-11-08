import React from "react";
import { MdCheckCircle } from "react-icons/md";
function QuizBox({
  qid,
  question,
  options,
  answer,
  handleMarking,
  selectedAnswer,
}) {
  return (
    <div className="mx-auto max-w-md w-full bg-white shadow-md shadow-sky-300 rounded-md p-5">
      <h4 className="font-bold text-lg">
        {qid + 1}. {question}
      </h4>
      <ul className="mt-4">
        {Object.keys(options).map((ele, id) => {
          return (
            <li
              className={`p-2 rounded-md border-2 border-slate-800 mb-2 hover:bg-slate-950 hover:text-slate-100 transition-colors cursor-pointer ${
                selectedAnswer === options[ele]
                  ? "bg-slate-800 text-slate-100"
                  : ""
              }`}
              key={`q-${qid}-o-${id}`}
              onClick={() => handleMarking(qid, answer, options[ele])}
            >
              {String.fromCharCode(65 + id)}. {options[ele]}
            </li>
          );
        })}
      </ul>

      {selectedAnswer !== "" ? (
        <p
          className={`bg-green-100 text-green-900 rounded-full text-sm px-4 py-2 w-fit text-wrap break-words ring-2 flex gap-2 items-center ring-green-500 font-medium`}
        >
          {<MdCheckCircle color="#1a7" size={"1.2em"} />} {answer}
        </p>
      ) : null}
    </div>
  );
}

export default QuizBox;
