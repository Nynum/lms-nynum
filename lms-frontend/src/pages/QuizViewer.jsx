import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuizByLesson, submitQuiz } from "../api/quizzes";

export default function QuizViewer() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getQuizByLesson(lessonId).then(setQuestions);
  }, [lessonId]);

  const handleChange = (questionId, choice) => {
    setAnswers({ ...answers, [questionId]: choice });
  };

  const handleSubmit = async () => {
    const res = await submitQuiz(lessonId, answers);
    setResults(res.results);
    setSubmitted(true);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">แบบทดสอบ</h1>
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold mb-2">{index + 1}. {q.question}</p>
          {q.choices.map((choice, idx) => (
            <div key={idx} className="ml-4">
              <label>
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={choice}
                  disabled={submitted}
                  checked={answers[q.id] === choice}
                  onChange={() => handleChange(q.id, choice)}
                />
                <span className="ml-2">{choice}</span>
              </label>
            </div>
          ))}
          {submitted && (
            <div className={`mt-2 ${results[index]?.correct ? "text-green-600" : "text-red-600"}`}>
              {results[index]?.correct ? "✅ ถูกต้อง" : "❌ ผิด"} - {results[index]?.explanation}
            </div>
          )}
        </div>
      ))}
      {!submitted ? (
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          ส่งคำตอบ
        </button>
      ) : (
        <button onClick={() => navigate("/dashboard")} className="bg-green-600 text-white px-4 py-2 rounded">
          กลับไปหน้าหลัก
        </button>
      )}
    </div>
  );
}
